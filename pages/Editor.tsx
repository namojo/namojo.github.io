import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { EditorState } from '../types';
import { getPost, getUsedCategories } from '../services/dataService';
import { authService } from '../services/authService';

// ─── 유틸 ────────────────────────────────────────────────────────────
const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const toSlug = (text: string): string =>
  text
    .trim()
    .toLowerCase()
    // 한글·공백·영문·숫자만 남기고 나머지 제거
    .replace(/[^\w가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    // URL로 쓸 때는 한글이 percent-encoded되므로, 가급적 영문 슬러그 권장. 한글은 그대로 허용.
    .slice(0, 80);

const displayDate = (iso: string): string => {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const DRAFT_KEY = 'editor_draft_v2';
const GH_TOKEN_KEY = 'editor_gh_token';
const GH_CONFIG_KEY = 'editor_gh_config';
const DEFAULT_GH = { owner: 'namojo', repo: 'namojo.github.io', branch: 'main' };

// ─── GitHub Publish ────────────────────────────────────────────────
// GitHub Contents API로 _posts/{filename}.md 파일을 직접 커밋한다.
// PAT(repo scope)이 필요. 푸시되면 Actions가 자동 빌드·배포한다.
async function publishToGitHub(opts: {
  token: string;
  owner: string;
  repo: string;
  branch: string;
  path: string;
  content: string;
  message: string;
}) {
  const { token, owner, repo, branch, path, content, message } = opts;

  // 기존 파일이 있는지 확인 (update면 sha 필요)
  let sha: string | undefined;
  try {
    const r = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${branch}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' } },
    );
    if (r.ok) {
      const data = await r.json();
      sha = data.sha;
    }
  } catch { /* not exists */ }

  // UTF-8 → base64 (한글 안전)
  const encoded = btoa(unescape(encodeURIComponent(content)));

  const putUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const body: Record<string, unknown> = { message, content: encoded, branch };
  if (sha) body.sha = sha;

  const res = await fetch(putUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub API ${res.status}: ${err}`);
  }
  return res.json() as Promise<{ commit: { html_url: string; sha: string } }>;
}

// ─── GitHub Delete ─────────────────────────────────────────────────
// _posts 디렉토리에서 슬러그에 매칭되는 파일을 찾아 삭제한다.
// date를 모르더라도 동작하도록 listing → match → DELETE 순으로 처리.
async function deleteFromGitHub(opts: {
  token: string;
  owner: string;
  repo: string;
  branch: string;
  slug: string;
  message: string;
}): Promise<{ path: string; commit: { html_url: string; sha: string } }> {
  const { token, owner, repo, branch, slug, message } = opts;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
  };

  // 1. _posts 디렉토리 리스팅
  const listRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/_posts?ref=${branch}`,
    { headers },
  );
  if (!listRes.ok) throw new Error(`_posts 조회 실패: ${listRes.status}`);
  const files = (await listRes.json()) as Array<{ name: string; path: string; sha: string }>;

  // 2. YYYY-MM-DD-{slug}.md 패턴 매칭
  const match = files.find((f) => f.name.endsWith(`-${slug}.md`));
  if (!match) throw new Error(`_posts에서 "${slug}"에 해당하는 파일을 찾지 못했습니다.`);

  // 3. DELETE
  const delRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(match.path)}`,
    {
      method: 'DELETE',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, sha: match.sha, branch }),
    },
  );
  if (!delRes.ok) {
    const err = await delRes.text();
    throw new Error(`DELETE 실패: ${delRes.status} — ${err}`);
  }
  const data = (await delRes.json()) as { commit: { html_url: string; sha: string } };
  return { path: match.path, commit: data.commit };
}

// ─── 이미지 삽입 모달 ───────────────────────────────────────────────
interface ImageModalProps {
  slug: string;
  onInsert: (markdown: string) => void;
  onClose: () => void;
}

const InlineImageModal: React.FC<ImageModalProps> = ({ slug, onInsert, onClose }) => {
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [mode, setMode] = useState<'url' | 'upload'>('upload');
  const [suggestedPath, setSuggestedPath] = useState<string | null>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  const handleFile = (file: File) => {
    // 파일명 정규화
    const safeName = file.name
      .replace(/\.[^.]+$/, '')
      .replace(/[^\w가-힣-]/g, '-')
      .replace(/-+/g, '-')
      .toLowerCase();
    const ext = (file.name.match(/\.[^.]+$/)?.[0] || '.jpg').toLowerCase();
    const path = `/images/inline/${slug || 'post'}-${safeName}${ext}`;
    setSuggestedPath(path);

    // 미리보기
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    // 파일을 사용자에게 자동 다운로드 — 저장소에 수동 저장하도록
    const blobUrl = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `${slug || 'post'}-${safeName}${ext}`;
    a.click();
    URL.revokeObjectURL(blobUrl);
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };
  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) handleFile(file);
  };

  const insert = () => {
    const finalUrl = mode === 'url' ? url.trim() : (suggestedPath || '');
    if (!finalUrl) return;
    const md = `\n\n![${caption || '이미지'}](${finalUrl})\n\n`;
    onInsert(md);
  };

  const canInsert = mode === 'url' ? url.trim().length > 0 : !!suggestedPath;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-ink-900 rounded-2xl shadow-card-hover max-w-lg w-full p-6 border border-ink-200 dark:border-ink-700">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-display font-bold text-ink-900 dark:text-ink-50">
            이미지 삽입
          </h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800 flex items-center justify-center text-ink-600 dark:text-ink-300">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* 모드 토글 */}
        <div className="flex bg-ink-100 dark:bg-ink-800 rounded-lg p-1 mb-5">
          <button
            onClick={() => setMode('upload')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-apple ${mode === 'upload' ? 'bg-white dark:bg-ink-900 text-warm-600 shadow' : 'text-ink-500'}`}
          >
            파일 업로드
          </button>
          <button
            onClick={() => setMode('url')}
            className={`flex-1 py-2 text-sm font-semibold rounded-md transition-apple ${mode === 'url' ? 'bg-white dark:bg-ink-900 text-warm-600 shadow' : 'text-ink-500'}`}
          >
            URL 입력
          </button>
        </div>

        {/* Upload 모드 */}
        {mode === 'upload' && (
          <div
            ref={dropRef}
            onDragOver={onDragOver}
            onDrop={onDrop}
            className="border-2 border-dashed border-ink-300 dark:border-ink-700 rounded-xl p-6 text-center mb-4 hover:border-warm-400 transition-apple"
          >
            {preview ? (
              <div>
                <img src={preview} alt="preview" className="max-h-40 mx-auto rounded-lg mb-3" />
                <p className="text-xs text-ink-500 mb-2">추천 경로: <code className="bg-ink-100 dark:bg-ink-800 px-1.5 py-0.5 rounded">{suggestedPath}</code></p>
                <p className="text-xs text-warm-600 mb-3">✓ 파일이 자동 다운로드됐습니다. <strong>public{suggestedPath}</strong>에 저장해 주세요.</p>
              </div>
            ) : (
              <>
                <span className="material-symbols-outlined text-4xl text-ink-400 block mb-2">cloud_upload</span>
                <p className="text-sm text-ink-700 dark:text-ink-200 mb-1 font-semibold">이미지를 끌어놓거나 클릭해서 선택</p>
                <p className="text-xs text-ink-500">PNG·JPG·WebP 등 · 업로드 시 파일이 자동 다운로드됩니다</p>
              </>
            )}
            <label className="inline-block mt-3 px-4 py-2 rounded-full bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 text-sm font-semibold cursor-pointer transition-apple">
              {preview ? '다른 파일 선택' : '파일 선택'}
              <input type="file" accept="image/*" onChange={onFileSelect} className="sr-only" />
            </label>
          </div>
        )}

        {/* URL 모드 */}
        {mode === 'url' && (
          <div className="mb-4">
            <label className="text-xs font-bold uppercase tracking-wider text-ink-500 mb-1.5 block">이미지 URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="/images/inline/my-image.jpg 또는 https://…"
              className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-900 dark:text-ink-50 placeholder-ink-400 focus:border-warm-400 focus:ring-2 focus:ring-warm-200/60 px-4 py-2.5 text-sm outline-none"
              autoFocus
            />
            {url && (
              <div className="mt-3 rounded-xl overflow-hidden border border-ink-200 dark:border-ink-700 max-h-40">
                <img src={url} alt="preview" className="w-full h-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            )}
          </div>
        )}

        {/* 캡션 */}
        <div className="mb-5">
          <label className="text-xs font-bold uppercase tracking-wider text-ink-500 mb-1.5 block">캡션 (선택)</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="사진·그림 아래에 표시될 설명"
            className="w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 text-ink-900 dark:text-ink-50 placeholder-ink-400 focus:border-warm-400 focus:ring-2 focus:ring-warm-200/60 px-4 py-2.5 text-sm outline-none"
          />
        </div>

        {/* 액션 */}
        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="px-5 py-2.5 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-200 text-sm font-semibold hover:bg-ink-200 dark:hover:bg-ink-700 transition-apple">
            취소
          </button>
          <button
            onClick={insert}
            disabled={!canInsert}
            className="px-5 py-2.5 rounded-full bg-warm-500 hover:bg-warm-600 disabled:bg-ink-300 dark:disabled:bg-ink-700 disabled:cursor-not-allowed text-white text-sm font-semibold transition-apple"
          >
            본문에 삽입
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── 컴포넌트 ───────────────────────────────────────────────────────
export const Editor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<EditorState>({
    title: '',
    slug: '',
    date: todayIso(),
    content: '',
    excerpt: '',
    category: '',
    tags: [],
    coverImage: '',
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [categoryMode, setCategoryMode] = useState<'select' | 'new'>('select');
  const [newCategory, setNewCategory] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [mobileTab, setMobileTab] = useState<'write' | 'preview'>('write');
  const [uploadNote, setUploadNote] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [slugEditedManually, setSlugEditedManually] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  // ─── GitHub Publish 상태 ───────────────────────────────────
  const [ghToken, setGhToken] = useState('');
  const [ghSaveToken, setGhSaveToken] = useState(true);
  const [ghConfig, setGhConfig] = useState(DEFAULT_GH);
  const [publishing, setPublishing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [publishResult, setPublishResult] = useState<{ ok: boolean; message: string; commitUrl?: string } | null>(null);

  // 초기 GitHub 설정 로드
  useEffect(() => {
    try {
      const t = localStorage.getItem(GH_TOKEN_KEY);
      if (t) setGhToken(t);
      const c = localStorage.getItem(GH_CONFIG_KEY);
      if (c) setGhConfig({ ...DEFAULT_GH, ...JSON.parse(c) });
    } catch { /* ignore */ }
  }, []);

  // 인증·로드
  useEffect(() => {
    if (!authService.isAdmin()) {
      alert('관리자 권한이 필요합니다.');
      navigate('/login');
      return;
    }

    (async () => {
      const used = await getUsedCategories();
      setCategories(used);
    })();

    if (id) {
      setLoading(true);
      getPost(id).then(post => {
        if (post) {
          setState({
            title: post.title,
            slug: post.id,
            date: todayIso(), // 편집 시 발행일은 원본 데이터 기반 추론 생략 — 저자가 수정
            content: post.content,
            excerpt: post.excerpt,
            category: post.category,
            tags: post.tags ?? [],
            coverImage: post.coverImage || '',
          });
          setSlugEditedManually(true);
        }
        setLoading(false);
      });
    } else {
      // 새 포스트: 드래프트가 있으면 자동 로드
      try {
        const raw = localStorage.getItem(DRAFT_KEY);
        if (raw) {
          const draft = JSON.parse(raw) as EditorState;
          setState(draft);
          setSlugEditedManually(!!draft.slug);
        }
      } catch { /* ignore */ }
    }
  }, [id, navigate]);

  // 제목 → 슬러그 자동 추정 (사용자가 수동 편집하기 전까지)
  useEffect(() => {
    if (!slugEditedManually && state.title) {
      setState(s => ({ ...s, slug: toSlug(s.title) }));
    }
  }, [state.title, slugEditedManually]);

  // ─── 입력 핸들러 ─────────────────────────────────────────────────
  const patch = (partial: Partial<EditorState>) => setState(s => ({ ...s, ...partial }));

  const onText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    patch({ [e.target.name]: e.target.value } as Partial<EditorState>);
  };

  const onSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlugEditedManually(true);
    patch({ slug: toSlug(e.target.value) });
  };

  const onCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    if (v === '__new__') {
      setCategoryMode('new');
      patch({ category: '' });
    } else {
      setCategoryMode('select');
      patch({ category: v });
    }
  };

  const commitNewCategory = () => {
    const v = newCategory.trim();
    if (!v) return;
    patch({ category: v });
    if (!categories.includes(v)) setCategories([...categories, v].sort());
    setNewCategory('');
    setCategoryMode('select');
  };

  // ─── 태그 chip ──────────────────────────────────────────────────
  const addTag = (raw: string) => {
    const t = raw.trim().replace(/^#/, '');
    if (!t) return;
    if (state.tags.includes(t)) return;
    patch({ tags: [...state.tags, t] });
  };
  const removeTag = (t: string) => patch({ tags: state.tags.filter(x => x !== t) });
  const onTagKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',' || (e.key === ' ' && tagInput.length > 1)) {
      e.preventDefault();
      addTag(tagInput);
      setTagInput('');
    } else if (e.key === 'Backspace' && !tagInput && state.tags.length) {
      removeTag(state.tags[state.tags.length - 1]);
    }
  };

  // ─── 마크다운 툴바 삽입 ───────────────────────────────────────
  const insertText = (before: string, after: string = '') => {
    const ta = document.getElementById('content-editor') as HTMLTextAreaElement | null;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const text = ta.value;
    const selection = text.substring(start, end);
    const newText = text.substring(0, start) + before + selection + after + text.substring(end);
    patch({ content: newText });
    setTimeout(() => {
      ta.focus();
      const offset = selection.length > 0 ? selection.length + before.length + after.length : before.length;
      ta.selectionStart = ta.selectionEnd = start + offset;
    }, 0);
  };

  // ─── 커버 이미지 업로드 ────────────────────────────────────────
  const onCoverFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1) 로컬 미리보기: base64로 읽어 바로 coverImage에 주입 — 저자는 실제 파일을
    //    public/images/에 저장해야 배포 시 정상 동작. 안내 문구 표시.
    const reader = new FileReader();
    reader.onload = () => {
      // 파일명 정규화 (영문·숫자·하이픈만 추천)
      const safeName = file.name
        .replace(/\.[^.]+$/, '')
        .replace(/[^\w가-힣-]/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
      const ext = (file.name.match(/\.[^.]+$/)?.[0] || '.jpg').toLowerCase();
      const suggestedPath = `/images/${safeName}${ext}`;
      patch({ coverImage: reader.result as string });
      setUploadNote(
        `업로드한 이미지는 미리보기용으로 base64로 임시 저장됐습니다. 실제 배포하려면 이 파일을 ` +
        `"public/images/${safeName}${ext}" 에 저장한 뒤, 아래 Cover Image URL 칸을 ` +
        `"${suggestedPath}" 로 바꿔 주세요. (또는 '사이트에 저장' 버튼으로 자동 교체)`
      );
      // 파일을 사용자에게 다운로드 — 수동 저장용
      const dlUrl = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = dlUrl;
      a.download = `${safeName}${ext}`;
      a.click();
      URL.revokeObjectURL(dlUrl);
      // 참고: 추천 경로를 data 속성에 기억해 두기
      (reader as unknown as { _suggested: string })._suggested = suggestedPath;
    };
    reader.readAsDataURL(file);
    // 후속 '사이트에 저장' 버튼에서 참조
    (fileInputRef as unknown as { _suggestedPath?: string })._suggestedPath =
      `/images/${file.name.replace(/\.[^.]+$/, '').replace(/[^\w가-힣-]/g, '-').toLowerCase()}${
        (file.name.match(/\.[^.]+$/)?.[0] || '.jpg').toLowerCase()
      }`;
  };

  const acceptSuggestedPath = () => {
    const suggested = (fileInputRef as unknown as { _suggestedPath?: string })._suggestedPath;
    if (suggested) {
      patch({ coverImage: suggested });
      setUploadNote(
        `Cover Image URL을 ${suggested} 로 설정했습니다. 반드시 실제 이미지 파일을 ` +
        `public/images/ 아래에 저장해야 배포 후 보입니다.`
      );
    }
  };

  // ─── 드래프트·내보내기 ────────────────────────────────────────
  const saveDraft = () => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(state));
      const now = new Date().toLocaleTimeString('ko-KR');
      setSavedAt(now);
    } catch {
      alert('드래프트 저장 실패 (브라우저 저장소 용량 초과일 수 있습니다).');
    }
  };
  const loadDraft = () => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return alert('저장된 드래프트가 없습니다.');
      setState(JSON.parse(raw));
      setSlugEditedManually(true);
    } catch {
      alert('드래프트 불러오기 실패.');
    }
  };
  const clearDraft = () => {
    if (!confirm('드래프트를 지우시겠습니까?')) return;
    localStorage.removeItem(DRAFT_KEY);
    setSavedAt(null);
  };

  // Jekyll 프런트매터 + 본문 마크다운 다운로드 (_posts/ 에 그대로 저장 가능)
  const downloadMarkdown = () => {
    if (!state.title || !state.slug) {
      alert('제목과 슬러그는 필수입니다.');
      return;
    }
    const fm = [
      '---',
      'layout: post',
      `title: "${state.title.replace(/"/g, '\\"')}"`,
      `date: ${state.date} 09:00:00 +0900`,
      `categories: [${state.category ? state.category.toLowerCase().replace(/\s+/g, '-') : 'uncategorized'}]`,
      `tags: [${state.tags.join(', ')}]`,
      `excerpt: "${state.excerpt.replace(/"/g, '\\"')}"`,
      state.coverImage ? `coverImage: "${state.coverImage.startsWith('data:') ? '' : state.coverImage}"` : '',
      `category: "${state.category || 'Uncategorized'}"`,
      '---',
      '',
      state.content,
      '',
    ].filter(Boolean).join('\n');
    const blob = new Blob([fm], { type: 'text/markdown;charset=utf-8' });
    triggerDownload(blob, `${state.date}-${state.slug}.md`);
  };

  // posts.json에 바로 붙일 수 있는 단일 엔트리 JSON
  const downloadJson = () => {
    if (!state.title || !state.slug) {
      alert('제목과 슬러그는 필수입니다.');
      return;
    }
    const entry = {
      id: state.slug,
      title: state.title,
      excerpt: state.excerpt,
      content: state.content,
      coverImage: state.coverImage.startsWith('data:') ? '' : state.coverImage,
      date: displayDate(state.date),
      likes: 0,
      author: { name: '조남호 (namojo)', avatar: '/images/author-avatar.jpg' },
      tags: state.tags,
      category: state.category || 'AI',
    };
    const blob = new Blob([JSON.stringify(entry, null, 2)], { type: 'application/json' });
    triggerDownload(blob, `post-${state.slug}.json`);
  };

  const triggerDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ─── 발행 (GitHub Contents API) ──────────────────────────────
  const publish = async () => {
    if (!state.title || !state.slug) { alert('제목과 슬러그는 필수입니다.'); return; }
    if (!ghToken.trim()) { alert('GitHub Personal Access Token을 먼저 입력해 주세요.'); return; }

    // 토큰 저장 여부
    if (ghSaveToken) {
      localStorage.setItem(GH_TOKEN_KEY, ghToken);
    } else {
      localStorage.removeItem(GH_TOKEN_KEY);
    }
    localStorage.setItem(GH_CONFIG_KEY, JSON.stringify(ghConfig));

    const fm = [
      '---',
      'layout: post',
      `title: "${state.title.replace(/"/g, '\\"')}"`,
      `date: ${state.date} 09:00:00 +0900`,
      `categories: [${state.category ? state.category.toLowerCase().replace(/\s+/g, '-') : 'uncategorized'}]`,
      `tags: [${state.tags.join(', ')}]`,
      `excerpt: "${state.excerpt.replace(/"/g, '\\"')}"`,
      state.coverImage && !state.coverImage.startsWith('data:') ? `coverImage: "${state.coverImage}"` : '',
      `category: "${state.category || 'Uncategorized'}"`,
      '---',
      '',
      state.content,
      '',
    ].filter(Boolean).join('\n');

    const path = `_posts/${state.date}-${state.slug}.md`;
    const message = `post: ${state.title}`;

    setPublishing(true);
    setPublishResult(null);
    try {
      const result = await publishToGitHub({
        token: ghToken.trim(),
        owner: ghConfig.owner,
        repo: ghConfig.repo,
        branch: ghConfig.branch,
        path,
        content: fm,
        message,
      });
      setPublishResult({
        ok: true,
        message: `✓ 발행되었습니다. GitHub Actions가 자동 빌드·배포합니다. 약 1~2분 후 사이트에 반영됩니다.`,
        commitUrl: result.commit?.html_url,
      });
      // 발행 성공 시 드래프트 자동 제거
      localStorage.removeItem(DRAFT_KEY);
    } catch (e) {
      setPublishResult({
        ok: false,
        message: `✗ 발행 실패: ${(e as Error).message}. 토큰 권한(repo scope)과 리포 설정을 확인해 주세요.`,
      });
    } finally {
      setPublishing(false);
    }
  };

  const deletePost = async () => {
    if (!id) return; // 새 글에는 삭제 없음
    if (!ghToken.trim()) {
      alert('GitHub Token이 필요합니다. 오른쪽 사이드바의 "GitHub 연결" 섹션에서 설정해주세요.');
      return;
    }
    const ok = window.confirm(
      `정말로 "${state.title || id}" 포스트를 삭제할까요?\n\n` +
        `- _posts/ 디렉토리에서 파일이 영구적으로 제거됩니다.\n` +
        `- GitHub Actions가 재배포하면 사이트에서 사라집니다.\n` +
        `- git 히스토리로는 복구 가능합니다.`,
    );
    if (!ok) return;

    setDeleting(true);
    setPublishResult(null);
    try {
      const result = await deleteFromGitHub({
        token: ghToken.trim(),
        owner: ghConfig.owner,
        repo: ghConfig.repo,
        branch: ghConfig.branch,
        slug: id,
        message: `delete: ${state.title || id}`,
      });
      setPublishResult({
        ok: true,
        message: `✓ 삭제되었습니다 (${result.path}). GitHub Actions가 자동 재배포합니다. 약 1~2분 후 사이트에서 사라집니다.`,
        commitUrl: result.commit?.html_url,
      });
      // 2초 후 홈으로 이동
      setTimeout(() => navigate('/'), 2000);
    } catch (e) {
      setPublishResult({
        ok: false,
        message: `✗ 삭제 실패: ${(e as Error).message}`,
      });
    } finally {
      setDeleting(false);
    }
  };

  const copyMarkdown = async () => {
    // 프런트매터 포함 마크다운을 클립보드에
    const fm = [
      '---',
      `title: "${state.title.replace(/"/g, '\\"')}"`,
      `date: ${state.date} 09:00:00 +0900`,
      `categories: [${state.category ? state.category.toLowerCase().replace(/\s+/g, '-') : 'uncategorized'}]`,
      `tags: [${state.tags.join(', ')}]`,
      `excerpt: "${state.excerpt.replace(/"/g, '\\"')}"`,
      state.coverImage && !state.coverImage.startsWith('data:') ? `coverImage: "${state.coverImage}"` : '',
      `category: "${state.category || 'Uncategorized'}"`,
      '---',
      '',
      state.content,
    ].filter(Boolean).join('\n');
    try {
      await navigator.clipboard.writeText(fm);
      alert('마크다운이 클립보드에 복사됐습니다.');
    } catch {
      alert('복사 실패.');
    }
  };

  // 필드 미완성 감지
  const validationIssues = useMemo(() => {
    const issues: string[] = [];
    if (!state.title) issues.push('제목');
    if (!state.slug) issues.push('슬러그');
    if (!state.date) issues.push('발행일');
    if (!state.category) issues.push('카테고리');
    if (!state.excerpt) issues.push('요약');
    if (!state.content) issues.push('본문');
    return issues;
  }, [state]);

  if (loading) {
    return <div className="min-h-[60vh] flex items-center justify-center text-ink-500">Loading…</div>;
  }

  // ─── 공통 입력 스타일 ─────────────────────────────────────────
  const inputCls =
    'w-full rounded-xl border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 ' +
    'text-ink-900 dark:text-ink-50 placeholder-ink-400 ' +
    'focus:border-warm-400 focus:ring-2 focus:ring-warm-200/60 dark:focus:ring-warm-500/30 ' +
    'transition-apple px-4 py-2.5 text-sm outline-none';

  const labelCls = 'text-[11px] font-bold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-400 mb-1.5 block';

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-6 pb-12">
      {/* ───── Header ───── */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link to="/" className="text-eyebrow uppercase text-warm-500 hover:text-warm-600 transition-apple">← 홈으로</Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink-900 dark:text-ink-50">
            {id ? '포스트 편집' : '새 포스트'}
          </h1>
          <p className="text-sm text-ink-500 mt-1">
            _posts/YYYY-MM-DD-slug.md 또는 posts.json 엔트리로 내보낼 수 있습니다.
            {savedAt && <span className="text-warm-500 ml-2">· 드래프트 저장됨 {savedAt}</span>}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button onClick={saveDraft} className="px-4 py-2 rounded-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:border-warm-400 transition-apple">
            드래프트 저장
          </button>
          <button onClick={loadDraft} className="px-4 py-2 rounded-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:border-warm-400 transition-apple">
            드래프트 불러오기
          </button>
          <button onClick={copyMarkdown} className="px-4 py-2 rounded-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:border-warm-400 transition-apple">
            MD 복사
          </button>
          <button onClick={downloadJson} className="px-4 py-2 rounded-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-sm font-semibold text-ink-700 dark:text-ink-200 hover:border-warm-400 transition-apple">
            JSON 다운로드
          </button>
          <button
            onClick={downloadMarkdown}
            disabled={validationIssues.length > 0}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-warm-400 disabled:border-ink-200 disabled:cursor-not-allowed text-ink-800 dark:text-ink-100 text-sm font-semibold transition-apple"
            title={validationIssues.length > 0 ? `미완성: ${validationIssues.join(', ')}` : undefined}
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            MD 다운로드
          </button>
          {id && (
            <button
              onClick={deletePost}
              disabled={deleting || publishing || !ghToken.trim()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-coral-300 dark:border-coral-700 text-coral-600 dark:text-coral-400 hover:bg-coral-500 hover:text-white hover:border-coral-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold transition-apple"
              title={!ghToken.trim() ? 'GitHub Token이 필요합니다' : '이 포스트를 _posts/에서 영구 삭제'}
            >
              {deleting ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  삭제 중…
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">delete</span>
                  삭제
                </>
              )}
            </button>
          )}
          <button
            onClick={publish}
            disabled={validationIssues.length > 0 || publishing || !ghToken.trim()}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-warm-500 hover:bg-warm-600 disabled:bg-ink-300 dark:disabled:bg-ink-700 disabled:cursor-not-allowed text-white text-sm font-semibold transition-apple"
            title={
              validationIssues.length > 0
                ? `미완성: ${validationIssues.join(', ')}`
                : !ghToken.trim()
                  ? 'GitHub Token이 필요합니다 (사이드바에서 설정)'
                  : '_posts에 커밋하고 GitHub Actions로 자동 배포'
            }
          >
            {publishing ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                발행 중…
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                발행하기
              </>
            )}
          </button>
        </div>
      </div>

      {/* Publish 결과 배너 */}
      {publishResult && (
        <div className={`mb-4 p-4 rounded-xl border text-sm flex items-start gap-3 ${
          publishResult.ok
            ? 'bg-warm-50 dark:bg-warm-900/30 border-warm-200 dark:border-warm-900 text-ink-800 dark:text-ink-100'
            : 'bg-coral-50 dark:bg-coral-900/30 border-coral-200 dark:border-coral-900 text-coral-700 dark:text-coral-300'
        }`}>
          <span className="flex-1">
            {publishResult.message}
            {publishResult.commitUrl && (
              <> · <a href={publishResult.commitUrl} target="_blank" rel="noopener noreferrer" className="underline font-semibold">커밋 보기</a></>
            )}
          </span>
          <button onClick={() => setPublishResult(null)} className="text-ink-500 hover:text-ink-800">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* ───── 미완성 경고 ───── */}
      {validationIssues.length > 0 && (
        <div className="mb-4 p-3 rounded-xl bg-warm-50 dark:bg-warm-900/30 border border-warm-200 dark:border-warm-900 text-sm text-warm-700 dark:text-warm-300">
          <strong>미완성 항목:</strong> {validationIssues.join(' · ')}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* ───── Left: 에디터 + 프리뷰 ───── */}
        <div className="lg:col-span-3 flex flex-col gap-4">

          {/* 제목·슬러그·발행일 */}
          <div className="bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-2xl p-5 shadow-card">
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={onText}
              placeholder="포스트 제목을 입력하세요…"
              className="w-full bg-transparent text-2xl sm:text-3xl font-display font-bold text-ink-900 dark:text-ink-50 placeholder-ink-300 border-none outline-none p-0 mb-3"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label>
                <span className={labelCls}>Slug (URL)</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-ink-400 whitespace-nowrap">/post/</span>
                  <input
                    type="text"
                    value={state.slug}
                    onChange={onSlugChange}
                    placeholder="english-or-korean-slug"
                    className={inputCls}
                  />
                </div>
              </label>
              <label>
                <span className={labelCls}>발행일</span>
                <input
                  type="date"
                  name="date"
                  value={state.date}
                  onChange={onText}
                  max={todayIso()}
                  className={inputCls}
                />
              </label>
            </div>
          </div>

          {/* 에디터 + 프리뷰 */}
          <div className="bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-2xl shadow-card flex flex-col overflow-hidden" style={{ minHeight: '60vh' }}>
            {/* Toolbar */}
            <div className="border-b border-ink-200 dark:border-ink-700 p-2 flex flex-wrap justify-between items-center gap-2 bg-ink-50 dark:bg-ink-900">
              <div className="flex items-center gap-0.5 overflow-x-auto">
                {[
                  { icon: 'format_bold', title: '볼드', args: ['**', '**'] as const },
                  { icon: 'format_italic', title: '이탤릭', args: ['*', '*'] as const },
                  { icon: 'format_h2', title: '제목 H2', args: ['\n## ', '\n'] as const },
                  { icon: 'format_h3', title: '소제목 H3 (▸ prefix)', args: ['\n### ▸ ', '\n'] as const },
                  { icon: 'format_quote', title: '인용', args: ['\n> ', '\n'] as const },
                  { icon: 'format_list_bulleted', title: '불릿', args: ['\n- ', '\n'] as const },
                  { icon: 'format_list_numbered', title: '번호', args: ['\n1. ', '\n'] as const },
                  { icon: 'code', title: '인라인 코드', args: ['`', '`'] as const },
                  // 이미지 버튼은 모달로 분리되어 아래에서 따로 렌더
                  { icon: 'link', title: '링크', args: ['[', '](url)'] as const },
                  { icon: 'smart_display', title: 'YouTube 임베드', args: ['\n![영상 캡션](https://www.youtube.com/watch?v=', ')\n'] as const },
                ].map(b => (
                  <button
                    key={b.icon}
                    onClick={() => insertText(b.args[0], b.args[1])}
                    title={b.title}
                    className="p-2 rounded-lg text-ink-700 dark:text-ink-200 hover:bg-warm-100 dark:hover:bg-warm-900/30 hover:text-warm-600 transition-apple"
                  >
                    <span className="material-symbols-outlined text-[20px]">{b.icon}</span>
                  </button>
                ))}
                {/* 이미지 삽입: 모달 열기 */}
                <button
                  onClick={() => setImageModalOpen(true)}
                  title="이미지 + 캡션 삽입 (업로드·URL·드래그앤드롭)"
                  className="p-2 rounded-lg text-ink-700 dark:text-ink-200 hover:bg-warm-100 dark:hover:bg-warm-900/30 hover:text-warm-600 transition-apple"
                >
                  <span className="material-symbols-outlined text-[20px]">image</span>
                </button>
              </div>

              <div className="flex lg:hidden bg-ink-200 dark:bg-ink-700 rounded-lg p-1">
                <button
                  onClick={() => setMobileTab('write')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-apple ${mobileTab === 'write' ? 'bg-white dark:bg-ink-900 text-warm-600 shadow' : 'text-ink-500'}`}
                >
                  작성
                </button>
                <button
                  onClick={() => setMobileTab('preview')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-apple ${mobileTab === 'preview' ? 'bg-white dark:bg-ink-900 text-warm-600 shadow' : 'text-ink-500'}`}
                >
                  미리보기
                </button>
              </div>

              <div className="hidden lg:flex items-center gap-3 px-3 text-eyebrow uppercase text-ink-400">
                <span>마크다운</span>
                <div className="w-px h-4 bg-ink-200 dark:bg-ink-700" />
                <span>미리보기</span>
              </div>
            </div>

            {/* Split view */}
            <div className="flex-grow flex overflow-hidden" style={{ minHeight: '50vh' }}>
              <div
                className={`w-full lg:w-1/2 border-r border-ink-200 dark:border-ink-700 ${mobileTab === 'preview' ? 'hidden lg:block' : ''}`}
                onDragOver={(e) => { e.preventDefault(); }}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files?.[0];
                  if (file?.type.startsWith('image/')) {
                    setImageModalOpen(true);
                    // 모달이 열리면 사용자가 파일 선택 하도록 안내
                  }
                }}
              >
                <textarea
                  id="content-editor"
                  name="content"
                  value={state.content}
                  onChange={onText}
                  placeholder="# 글을 시작해 보세요…&#10;&#10;이미지는 툴바의 이미지 버튼을 눌러 업로드하거나, 본문 영역에 드래그-드롭하세요."
                  className="w-full h-full p-6 bg-white dark:bg-ink-900 text-ink-900 dark:text-ink-50 placeholder-ink-400 font-mono text-[14px] leading-[1.75] border-none resize-none outline-none"
                  style={{ minHeight: '50vh' }}
                />
              </div>
              <div className={`w-full lg:w-1/2 bg-ink-50 dark:bg-ink-900 overflow-y-auto ${mobileTab === 'write' ? 'hidden lg:block' : ''}`}>
                <div className="p-6 text-[1.05rem]">
                  {state.content ? (
                    <MarkdownRenderer content={state.content} />
                  ) : (
                    <div className="h-full flex items-center justify-center text-ink-400 italic text-sm">
                      작성을 시작하면 이 영역에 실시간으로 미리보기가 표시됩니다.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ───── Right: Settings ───── */}
        <aside className="lg:col-span-1 flex flex-col gap-5">

          {/* 카테고리 */}
          <div className="bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-2xl p-5 shadow-card">
            <h3 className="text-base font-display font-bold text-ink-900 dark:text-ink-50 mb-4">
              메타데이터
            </h3>

            <div className="flex flex-col gap-4">
              <div>
                <span className={labelCls}>카테고리</span>
                {categoryMode === 'select' ? (
                  <select
                    value={state.category}
                    onChange={onCategoryChange}
                    className={inputCls}
                  >
                    <option value="">선택하세요</option>
                    {categories.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                    <option value="__new__">＋ 새 카테고리 만들기…</option>
                  </select>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newCategory}
                      onChange={e => setNewCategory(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && commitNewCategory()}
                      placeholder="새 카테고리 이름 (예: 판교어 사전)"
                      className={inputCls}
                      autoFocus
                    />
                    <button
                      onClick={commitNewCategory}
                      className="px-3 rounded-xl bg-warm-500 hover:bg-warm-600 text-white text-xs font-semibold whitespace-nowrap transition-apple"
                    >
                      추가
                    </button>
                    <button
                      onClick={() => { setCategoryMode('select'); setNewCategory(''); }}
                      className="px-3 rounded-xl bg-ink-100 dark:bg-ink-700 text-ink-600 dark:text-ink-300 text-xs font-semibold whitespace-nowrap transition-apple"
                    >
                      취소
                    </button>
                  </div>
                )}
              </div>

              {/* 태그 chip */}
              <div>
                <span className={labelCls}>태그</span>
                <div className={`${inputCls} flex flex-wrap gap-1.5 p-2 cursor-text min-h-[44px]`}
                  onClick={() => (document.getElementById('tag-input') as HTMLInputElement)?.focus()}
                >
                  {state.tags.map(t => (
                    <span key={t} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-warm-100 dark:bg-warm-900/40 text-warm-700 dark:text-warm-300 text-xs font-semibold">
                      #{t}
                      <button onClick={(e) => { e.stopPropagation(); removeTag(t); }} className="hover:text-coral-500" aria-label={`${t} 제거`}>
                        <span className="material-symbols-outlined text-[14px]">close</span>
                      </button>
                    </span>
                  ))}
                  <input
                    id="tag-input"
                    type="text"
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                    onKeyDown={onTagKey}
                    onBlur={() => { if (tagInput.trim()) { addTag(tagInput); setTagInput(''); } }}
                    placeholder={state.tags.length === 0 ? 'Enter·쉼표로 추가' : ''}
                    className="flex-1 min-w-[80px] bg-transparent outline-none text-sm text-ink-900 dark:text-ink-50 placeholder-ink-400"
                  />
                </div>
                <p className="text-[11px] text-ink-400 mt-1">Enter 또는 쉼표로 태그를 나눕니다.</p>
              </div>

              {/* 요약 */}
              <div>
                <span className={labelCls}>요약 (Excerpt)</span>
                <textarea
                  name="excerpt"
                  value={state.excerpt}
                  onChange={onText}
                  rows={4}
                  placeholder="목록·OG 카드·이메일에 노출되는 한두 문장…"
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>
          </div>

          {/* 커버 이미지 */}
          <div className="bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-2xl p-5 shadow-card">
            <h3 className="text-base font-display font-bold text-ink-900 dark:text-ink-50 mb-4">
              커버 이미지
            </h3>
            <div className="flex flex-col gap-3">
              {state.coverImage && (
                <div className="relative rounded-xl overflow-hidden border border-ink-200 dark:border-ink-700 aspect-[16/10] bg-ink-50">
                  <img src={state.coverImage} alt="cover preview" className="w-full h-full object-cover" />
                  <button
                    onClick={() => patch({ coverImage: '' })}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-ink-900/70 hover:bg-coral-500 text-white inline-flex items-center justify-center"
                    aria-label="이미지 제거"
                  >
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                </div>
              )}

              <label>
                <span className={labelCls}>URL</span>
                <input
                  type="text"
                  name="coverImage"
                  value={state.coverImage.startsWith('data:') ? '' : state.coverImage}
                  onChange={onText}
                  placeholder="/images/my-cover.jpg 또는 https://…"
                  className={inputCls}
                />
              </label>

              <div className="flex gap-2">
                <label className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-ink-100 dark:bg-ink-700 hover:bg-ink-200 dark:hover:bg-ink-600 text-sm font-semibold text-ink-700 dark:text-ink-200 transition-apple">
                  <span className="material-symbols-outlined text-[18px]">upload</span>
                  파일 업로드
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={onCoverFile}
                    className="sr-only"
                  />
                </label>
                <button
                  onClick={acceptSuggestedPath}
                  className="px-3 rounded-xl bg-warm-500 hover:bg-warm-600 text-white text-xs font-semibold whitespace-nowrap transition-apple"
                  title="URL을 /images/{파일명}으로 자동 설정"
                >
                  사이트 경로 적용
                </button>
              </div>

              {uploadNote && (
                <p className="text-[11px] leading-relaxed bg-warm-50 dark:bg-warm-900/30 border border-warm-200 dark:border-warm-900 text-warm-700 dark:text-warm-300 rounded-lg p-2.5">
                  {uploadNote}
                </p>
              )}

              <p className="text-[11px] text-ink-400 leading-relaxed">
                정적 사이트라 실제 파일 업로드는 불가능합니다. 업로드 버튼을 누르면
                파일이 자동 다운로드되니, 그 파일을 저장소의 <code className="px-1 bg-ink-100 dark:bg-ink-700 rounded">public/images/</code>
                아래에 저장하세요.
              </p>
            </div>
          </div>

          {/* GitHub Publish 설정 */}
          <div className="bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 rounded-2xl p-5 shadow-card">
            <h3 className="text-base font-display font-bold text-ink-900 dark:text-ink-50 mb-1 inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-warm-500">rocket_launch</span>
              GitHub 직접 발행
            </h3>
            <p className="text-[11px] text-ink-500 mb-4 leading-relaxed">
              GitHub API로 <code className="px-1 bg-ink-100 dark:bg-ink-700 rounded">_posts/</code>에 바로 커밋합니다. 푸시 후 Actions가 자동으로 빌드·배포합니다.
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <span className={labelCls}>Personal Access Token</span>
                <input
                  type="password"
                  value={ghToken}
                  onChange={(e) => setGhToken(e.target.value)}
                  placeholder="ghp_… (repo 권한)"
                  className={inputCls}
                  autoComplete="off"
                />
                <p className="text-[11px] text-ink-400 mt-1.5 leading-relaxed">
                  <a href="https://github.com/settings/tokens/new?scopes=repo&description=Blog%20Editor" target="_blank" rel="noopener noreferrer" className="underline hover:text-warm-600">
                    GitHub에서 토큰 발급 →
                  </a>
                  {' '}Fine-grained 대신 Classic·repo scope 권장.
                </p>
                <label className="inline-flex items-center gap-2 text-[11px] text-ink-600 dark:text-ink-400 mt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ghSaveToken}
                    onChange={(e) => setGhSaveToken(e.target.checked)}
                    className="w-3.5 h-3.5 accent-warm-500"
                  />
                  이 브라우저에 토큰 저장 (localStorage)
                </label>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className={labelCls}>Owner</span>
                  <input
                    type="text"
                    value={ghConfig.owner}
                    onChange={(e) => setGhConfig({ ...ghConfig, owner: e.target.value })}
                    className={inputCls}
                  />
                </div>
                <div>
                  <span className={labelCls}>Branch</span>
                  <input
                    type="text"
                    value={ghConfig.branch}
                    onChange={(e) => setGhConfig({ ...ghConfig, branch: e.target.value })}
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <span className={labelCls}>Repository</span>
                <input
                  type="text"
                  value={ghConfig.repo}
                  onChange={(e) => setGhConfig({ ...ghConfig, repo: e.target.value })}
                  className={inputCls}
                />
              </div>

              <div className="text-[11px] text-ink-500 bg-ink-50 dark:bg-ink-900 rounded-lg p-3 leading-relaxed">
                <strong className="text-ink-700 dark:text-ink-300">커밋 경로 미리보기:</strong><br/>
                <code className="text-warm-600 dark:text-warm-400">
                  {ghConfig.owner}/{ghConfig.repo}:{ghConfig.branch}<br/>
                  └ _posts/{state.date}-{state.slug || 'slug'}.md
                </code>
              </div>
            </div>
          </div>

          {/* 발행 가이드 */}
          <div className="bg-gradient-to-br from-warm-50 to-white dark:from-warm-900/30 dark:to-ink-800 border border-warm-200 dark:border-warm-900 rounded-2xl p-5">
            <h3 className="text-base font-display font-bold text-ink-900 dark:text-ink-50 mb-3 inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-warm-500">menu_book</span>
              세 가지 발행 방법
            </h3>
            <ol className="text-xs leading-relaxed text-ink-700 dark:text-ink-300 list-decimal ml-4 space-y-2">
              <li><strong>발행하기 (권장)</strong> — 위 "발행" 버튼으로 GitHub에 원클릭 커밋. Actions가 자동 빌드.</li>
              <li><strong>MD 다운로드</strong> — 파일을 받아 로컬의 <code className="bg-ink-100 dark:bg-ink-700 px-1 rounded">_posts/</code>에 저장하고 CLI로 <code className="bg-ink-100 dark:bg-ink-700 px-1 rounded">git push</code>.</li>
              <li><strong>MD 복사 / JSON</strong> — 클립보드 또는 JSON으로 받아 수동 반영.</li>
            </ol>
            <p className="text-xs text-ink-500 dark:text-ink-400 mt-3 leading-relaxed">
              커버·인라인 이미지 파일은 GitHub Web UI나 CLI로 <code className="bg-ink-100 dark:bg-ink-700 px-1 rounded">public/images/</code> 아래에 별도 업로드해야 합니다 (정적 사이트 제약).
            </p>
            <button
              onClick={clearDraft}
              className="mt-4 text-[11px] text-ink-500 hover:text-coral-500 underline transition-apple"
            >
              저장된 드래프트 삭제
            </button>
          </div>
        </aside>
      </div>

      {/* ───── Image Insert Modal ───── */}
      {imageModalOpen && (
        <InlineImageModal
          slug={state.slug || 'post'}
          onInsert={(md) => {
            // 현재 커서 위치에 마크다운 삽입
            const ta = document.getElementById('content-editor') as HTMLTextAreaElement | null;
            if (ta) {
              const start = ta.selectionStart;
              const end = ta.selectionEnd;
              const text = ta.value;
              const newText = text.substring(0, start) + md + text.substring(end);
              patch({ content: newText });
              setTimeout(() => {
                ta.focus();
                ta.selectionStart = ta.selectionEnd = start + md.length;
              }, 0);
            } else {
              patch({ content: state.content + md });
            }
            setImageModalOpen(false);
          }}
          onClose={() => setImageModalOpen(false)}
        />
      )}
    </div>
  );
};
