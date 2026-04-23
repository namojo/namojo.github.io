import React, { useEffect, useRef, useState } from 'react';
import { COMMENTS } from '../config';

interface Props {
  postId: string;
  title: string;
  url: string;
}

const isLocalhost = () =>
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

/**
 * 다중 SNS 로그인 댓글 위젯.
 *
 * - Disqus: 트위터·페이스북·구글·Disqus 계정 지원. 언어를 한국어로 설정.
 *   Disqus는 iframe으로 렌더되어 우리 페이지의 CSS 폰트가 iframe 안까지
 *   전달되지 않는다. 폰트·색상 튜닝은 Disqus 관리자 페이지의
 *   Settings → Appearance에서 해야 한다.
 * - Giscus: GitHub Discussions 기반. 엔지니어 친화 대안.
 *
 * 설정이 비어 있을 때:
 *   - localhost(개발 중): config.ts 설정법 힌트 표시
 *   - 프로덕션: 조용한 "댓글 준비 중" 공지만 표시 (방문자에게 혼란을 주지 않음)
 */
export const Comments: React.FC<Props> = ({ postId, title, url }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  // 다크모드 탐지 (body에 class="dark"가 붙는지 관찰) — Disqus/Giscus 테마에 전달
  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // ── Disqus 로드 ────────────────────────────────────────────
  useEffect(() => {
    if (COMMENTS.provider !== 'disqus') return;
    if (!COMMENTS.disqusShortname) return;

    const w = window as unknown as {
      DISQUS?: { reset: (opts: { reload: boolean; config: () => void }) => void };
      disqus_config?: () => void;
    };

    // disqus_config는 Disqus 스크립트가 로드될 때 한 번 호출되어 페이지 메타를 설정한다.
    // 여기서 language를 'ko'로 지정해 Disqus UI(버튼·플레이스홀더·토글)가 한국어로 렌더된다.
    const disqus_config = function (this: {
      page: { url: string; identifier: string; title: string };
      language?: string;
    }) {
      this.page.url = url;
      this.page.identifier = postId;
      this.page.title = title;
      this.language = 'ko';
    };

    if (w.DISQUS) {
      // 라우팅 전환: 이미 로드된 경우 reset으로 새 스레드 요청
      w.DISQUS.reset({ reload: true, config: disqus_config });
      return;
    }

    (window as unknown as { disqus_config: () => void }).disqus_config = disqus_config as unknown as () => void;

    const s = document.createElement('script');
    s.src = `https://${COMMENTS.disqusShortname}.disqus.com/embed.js`;
    s.setAttribute('data-timestamp', String(+new Date()));
    s.async = true;
    (document.head || document.body).appendChild(s);
  }, [postId, title, url]);

  // ── Giscus 로드 ────────────────────────────────────────────
  useEffect(() => {
    if (COMMENTS.provider !== 'giscus') return;
    if (!ref.current) return;
    if (!COMMENTS.giscus.repoId || !COMMENTS.giscus.categoryId) return;

    ref.current.innerHTML = '';
    const s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.async = true;
    s.crossOrigin = 'anonymous';
    const g = COMMENTS.giscus;
    const attrs: Record<string, string> = {
      'data-repo': g.repo,
      'data-repo-id': g.repoId,
      'data-category': g.category,
      'data-category-id': g.categoryId,
      'data-mapping': g.mapping,
      'data-strict': g.strict,
      'data-reactions-enabled': g.reactionsEnabled,
      'data-emit-metadata': g.emitMetadata,
      'data-input-position': g.inputPosition,
      'data-theme': isDark ? 'dark_dimmed' : 'light',
      'data-lang': g.lang || 'ko',
    };
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
    ref.current.appendChild(s);
  }, [postId, url, isDark]);

  // ── Provider 비활성화 ─────────────────────────────────────
  if (COMMENTS.provider === 'none') return null;

  const isDisqusReady = COMMENTS.provider === 'disqus' && !!COMMENTS.disqusShortname;
  const isGiscusReady =
    COMMENTS.provider === 'giscus' &&
    !!COMMENTS.giscus.repoId &&
    !!COMMENTS.giscus.categoryId;

  // ── 설정 미완료 상태 ─────────────────────────────────────
  if (!isDisqusReady && !isGiscusReady) {
    // 프로덕션: 조용한 준비 중 메시지만. 방문자가 설정 힌트를 볼 필요 없음.
    if (!isLocalhost()) {
      return (
        <section className="mt-20 pt-12 border-t border-ink-200 dark:border-ink-700">
          <SectionHeading />
          <p className="text-sm text-ink-500 dark:text-ink-400 mt-4">
            댓글은 곧 열릴 예정입니다. 그동안 이야기는 공유 버튼으로 SNS에서 이어가 주세요.
          </p>
        </section>
      );
    }
    // localhost: 설정 힌트
    const needed = COMMENTS.provider === 'disqus'
      ? 'COMMENTS.disqusShortname'
      : 'COMMENTS.giscus.repoId + categoryId';
    const link = COMMENTS.provider === 'disqus' ? 'https://disqus.com' : 'https://giscus.app';
    return (
      <section className="mt-20 pt-12 border-t border-ink-200 dark:border-ink-700">
        <SectionHeading />
        <div className="mt-6 p-6 rounded-2xl border border-dashed border-ink-300 dark:border-ink-700 bg-ink-100/40 dark:bg-ink-800/40 text-sm text-ink-600 dark:text-ink-400">
          <p className="font-medium mb-1.5 text-ink-800 dark:text-ink-200">💬 댓글 기능 설정 필요 (개발 환경에서만 표시)</p>
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
              {link.replace('https://', '')}
            </a>
            에서 계정·repo 설정 후{' '}
            <code className="px-1.5 py-0.5 bg-ink-200 dark:bg-ink-700 rounded text-xs">config.ts</code>의{' '}
            <code className="px-1.5 py-0.5 bg-ink-200 dark:bg-ink-700 rounded text-xs">{needed}</code>
            을 입력해 주세요.
          </p>
        </div>
      </section>
    );
  }

  // ── 정상 렌더 ─────────────────────────────────────────────
  return (
    <section className="mt-20 pt-12 border-t border-ink-200 dark:border-ink-700">
      <SectionHeading />

      {/* Disqus는 iframe이라 폰트가 상속되지 않음. 컨테이너 패딩/배경만 우리가 관리. */}
      {COMMENTS.provider === 'disqus' && (
        <div className="mt-6 rounded-2xl bg-white dark:bg-ink-800 p-4 sm:p-6 border border-ink-200 dark:border-ink-700">
          <div id="disqus_thread" />
          <noscript className="text-sm text-ink-500">
            댓글을 보려면 JavaScript를 활성화해 주세요.{' '}
            <a
              href="https://disqus.com/?ref_noscript"
              className="underline text-linkblue"
            >
              Disqus로 이동
            </a>
          </noscript>
        </div>
      )}

      {COMMENTS.provider === 'giscus' && (
        <div className="mt-6">
          <div ref={ref} className="giscus" />
        </div>
      )}
    </section>
  );
};

const SectionHeading: React.FC = () => (
  <div>
    <span className="text-eyebrow uppercase text-warm-500 block mb-2">Comments</span>
    <h3 className="font-display font-bold text-2xl text-ink-900 dark:text-ink-50">댓글</h3>
    <p className="text-sm text-ink-500 dark:text-ink-400 mt-2">
      SNS 계정으로 편하게 남겨 주세요. 건강한 토론을 환영합니다.
    </p>
  </div>
);
