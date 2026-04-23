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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-warm-500 hover:bg-warm-600 disabled:bg-ink-300 dark:disabled:bg-ink-700 disabled:cursor-not-allowed text-white text-sm font-semibold transition-apple"
            title={validationIssues.length > 0 ? `미완성: ${validationIssues.join(', ')}` : undefined}
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            마크다운 다운로드
          </button>
        </div>
      </div>

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
                  { icon: 'image', title: '이미지 + 캡션', args: ['\n![캡션](', ')\n'] as const },
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
              <div className={`w-full lg:w-1/2 border-r border-ink-200 dark:border-ink-700 ${mobileTab === 'preview' ? 'hidden lg:block' : ''}`}>
                <textarea
                  id="content-editor"
                  name="content"
                  value={state.content}
                  onChange={onText}
                  placeholder="# 글을 시작해 보세요…&#10;&#10;이미지는 ![캡션](url) 형태로, YouTube는 ![영상 캡션](https://www.youtube.com/watch?v=...)"
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

          {/* 발행 가이드 */}
          <div className="bg-gradient-to-br from-warm-50 to-white dark:from-warm-900/30 dark:to-ink-800 border border-warm-200 dark:border-warm-900 rounded-2xl p-5">
            <h3 className="text-base font-display font-bold text-ink-900 dark:text-ink-50 mb-3 inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-warm-500">rocket_launch</span>
              발행 워크플로
            </h3>
            <ol className="text-xs leading-relaxed text-ink-700 dark:text-ink-300 list-decimal ml-4 space-y-1.5">
              <li><strong>마크다운 다운로드</strong>로 <code className="bg-ink-100 dark:bg-ink-700 px-1 rounded">{state.date}-{state.slug || 'slug'}.md</code> 파일을 받습니다.</li>
              <li>저장소의 <code className="bg-ink-100 dark:bg-ink-700 px-1 rounded">_posts/</code> 디렉토리에 그 파일을 넣습니다.</li>
              <li>커버 이미지 파일도 <code className="bg-ink-100 dark:bg-ink-700 px-1 rounded">public/images/</code>에 저장합니다.</li>
              <li>터미널에서 <code className="bg-ink-100 dark:bg-ink-700 px-1 rounded">npm run build && git push</code>.</li>
              <li>GitHub Actions가 자동으로 배포합니다.</li>
            </ol>
            <button
              onClick={clearDraft}
              className="mt-4 text-[11px] text-ink-500 hover:text-coral-500 underline transition-apple"
            >
              저장된 드래프트 삭제
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
