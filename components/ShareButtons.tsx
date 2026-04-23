import React, { useEffect, useState } from 'react';
import { SHARE, SITE } from '../config';

interface Props {
  title: string;
  /** 포스트 id (해시 경로 조립에 사용). 미제공 시 현재 location 사용 */
  postId?: string;
}

// 카카오 SDK 로딩 (앱키가 있을 때만)
let kakaoLoadPromise: Promise<void> | null = null;
const loadKakao = (jsKey: string): Promise<void> => {
  if (kakaoLoadPromise) return kakaoLoadPromise;
  kakaoLoadPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') { resolve(); return; }
    const w = window as unknown as { Kakao?: { isInitialized: () => boolean; init: (k: string) => void } };
    if (w.Kakao) {
      if (!w.Kakao.isInitialized()) w.Kakao.init(jsKey);
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js';
    script.async = true;
    script.onload = () => {
      const kw = (window as unknown as { Kakao: { isInitialized: () => boolean; init: (k: string) => void } }).Kakao;
      if (!kw.isInitialized()) kw.init(jsKey);
      resolve();
    };
    script.onerror = () => reject(new Error('Kakao SDK load failed'));
    document.head.appendChild(script);
  });
  return kakaoLoadPromise;
};

export const ShareButtons: React.FC<Props> = ({ title, postId }) => {
  const [copied, setCopied] = useState(false);
  const [kakaoReady, setKakaoReady] = useState(false);

  // 공유는 정적 렌더링된 페이지로 (크롤러가 OG 태그 읽을 수 있음 + 타이포 유지)
  // 내부 SPA 네비게이션 링크와는 다름 — SPA 경로는 /#/post/{id}
  const shareUrl = postId
    ? `${SITE.url}/p/${postId}/`
    : (typeof window !== 'undefined' ? window.location.href : SITE.url);

  useEffect(() => {
    if (SHARE.kakaoJsKey) {
      loadKakao(SHARE.kakaoJsKey).then(() => setKakaoReady(true)).catch(() => setKakaoReady(false));
    }
  }, []);

  const openPopup = (url: string) => {
    if (typeof window === 'undefined') return;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=600');
  };

  const onTwitter = () => openPopup(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
  );
  const onFacebook = () => openPopup(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
  );
  const onLinkedIn = () => openPopup(
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  );
  const onKakao = () => {
    const Kakao = (window as unknown as { Kakao?: { Share?: { sendDefault: (opts: unknown) => void } } }).Kakao;
    if (!Kakao?.Share) return;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description: SITE.title,
        imageUrl: '',
        link: { mobileWebUrl: shareUrl, webUrl: shareUrl },
      },
    });
  };
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback: select + execCommand
      const t = document.createElement('textarea');
      t.value = shareUrl; document.body.appendChild(t);
      t.select(); document.execCommand('copy'); document.body.removeChild(t);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };
  const onNative = async () => {
    const nav = navigator as Navigator & { share?: (d: { title: string; url: string }) => Promise<void> };
    if (nav.share) {
      try { await nav.share({ title, url: shareUrl }); } catch { /* user cancel */ }
    } else {
      onCopy();
    }
  };

  // 진한 대비 + SNS 브랜드 컬러 hover — 흐릿함 방지
  const btnBase =
    "group relative w-11 h-11 inline-flex items-center justify-center rounded-full " +
    "border border-ink-300 dark:border-ink-600 bg-white dark:bg-ink-800 " +
    "text-ink-800 dark:text-ink-100 " +
    "hover:shadow-card transition-apple duration-300 active:scale-95";

  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      <span className="text-sm font-semibold text-ink-700 dark:text-ink-300 mr-1">공유</span>

      {/* X (Twitter) — 검정 브랜드 컬러 hover */}
      <button
        onClick={onTwitter}
        className={`${btnBase} hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white`}
        aria-label="X(트위터)에 공유"
        title="X(트위터)에 공유"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
          <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.812l-5.33-6.97L4.27 22H1l8.04-9.185L1.5 2h6.97l4.82 6.37L18.244 2Zm-2.39 18h1.88L8.24 4H6.28l9.574 16Z"/>
        </svg>
      </button>

      {/* Facebook — 브랜드 블루 hover */}
      <button
        onClick={onFacebook}
        className={`${btnBase} hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]`}
        aria-label="페이스북에 공유"
        title="페이스북에 공유"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M13.5 21v-7h2.37l.35-2.77H13.5V9.42c0-.8.22-1.35 1.37-1.35h1.46V5.58c-.25-.03-1.12-.1-2.12-.1-2.1 0-3.54 1.28-3.54 3.64v2.1H8.29V14h2.38v7h2.83Z"/>
        </svg>
      </button>

      {/* LinkedIn — 브랜드 컬러 hover */}
      <button
        onClick={onLinkedIn}
        className={`${btnBase} hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]`}
        aria-label="LinkedIn에 공유"
        title="LinkedIn에 공유"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"/>
        </svg>
      </button>

      {/* Kakao (카카오톡) — 카카오 옐로우 hover */}
      {SHARE.kakaoJsKey && kakaoReady && (
        <button
          onClick={onKakao}
          className={`${btnBase} hover:bg-[#FEE500] hover:text-black hover:border-[#FEE500]`}
          aria-label="카카오톡에 공유"
          title="카카오톡에 공유"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.78 1.8 5.2 4.55 6.55-.2.73-.72 2.6-.83 3-.14.5.18.5.38.37.16-.1 2.53-1.73 3.55-2.43.77.1 1.55.15 2.35.15 5.52 0 10-3.58 10-8S17.52 3 12 3Z"/>
          </svg>
        </button>
      )}

      {/* 링크 복사 — 따뜻한 액센트 hover */}
      <button
        onClick={onCopy}
        className={`${btnBase} hover:bg-warm-500 hover:text-white hover:border-warm-500`}
        aria-label="링크 복사"
        title="링크 복사"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 13l4 4L19 7"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5"/>
            <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"/>
          </svg>
        )}
      </button>

      {/* Native Share — 모바일 전용 */}
      <button
        onClick={onNative}
        className={`${btnBase} md:hidden hover:bg-ink-800 hover:text-white hover:border-ink-800`}
        aria-label="기기 공유 메뉴"
        title="더 보기"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49"/>
        </svg>
      </button>

      {copied && <span className="text-xs font-semibold text-warm-600 dark:text-warm-400 ml-1">링크 복사됨</span>}
    </div>
  );
};
