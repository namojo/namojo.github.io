import React, { useState } from 'react';
import { SUBSCRIBE } from '../config';

interface Props {
  /** 카드/인라인 중 하나 */
  variant?: 'card' | 'inline';
  heading?: string;
  subheading?: string;
}

/**
 * 이메일 구독 폼. 정적 사이트 제약 상 외부 뉴스레터 서비스에 구독자를 위임한다.
 *
 * - provider="substack": 이메일을 prefill 파라미터로 Substack 구독 페이지에 전달.
 *     독자는 새 탭에서 한 번의 "Subscribe" 클릭으로 완료.
 *     (Substack은 CORS·숨은 API를 공식 지원하지 않으므로 페이지 이동이 가장 안전)
 *
 * - provider="buttondown": 폼 POST로 임베드 엔드포인트에 직접 제출. RSS-to-email
 *     자동화까지 쓸 수 있어 저자의 수동 개입이 줄어든다.
 *
 * 설정이 비어 있으면 폼은 표시되지 않고 관리자용 안내 박스로 대체된다(배포해도 깨지지 않음).
 */
export const SubscribeForm: React.FC<Props> = ({
  variant = 'card',
  heading = SUBSCRIBE.heading,
  subheading = SUBSCRIBE.subheading,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const provider = SUBSCRIBE.provider;
  const substackHandle = SUBSCRIBE.substackHandle.trim();
  const buttondownUsername = SUBSCRIBE.buttondownUsername.trim();

  const isSubstackReady = provider === 'substack' && !!substackHandle;
  const isButtondownReady = provider === 'buttondown' && !!buttondownUsername;

  // 설정 미완료 → 관리자 힌트 박스
  if (provider === 'none' || (!isSubstackReady && !isButtondownReady)) {
    const needed = provider === 'substack' ? 'SUBSCRIBE.substackHandle' : 'SUBSCRIBE.buttondownUsername';
    return (
      <div className={
        variant === 'card'
          ? 'rounded-3xl p-8 sm:p-10 bg-warm-50 dark:bg-warm-900/20 border border-warm-200 dark:border-warm-900 text-sm text-ink-600 dark:text-ink-400 text-center'
          : 'text-sm text-ink-500 text-center py-6 border-y border-ink-200 dark:border-ink-700'
      }>
        <p className="mb-1"><strong className="text-ink-800 dark:text-ink-200">💌 구독 기능 준비 중</strong></p>
        <p>
          <code className="px-1.5 py-0.5 bg-ink-100 dark:bg-ink-800 rounded text-xs">config.ts</code>의
          <code className="mx-1 px-1.5 py-0.5 bg-ink-100 dark:bg-ink-800 rounded text-xs">{needed}</code>을 입력하면 활성화됩니다.
        </p>
      </div>
    );
  }

  // ─── 제출 동작 결정 ─────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('이메일 주소를 확인해 주세요.');
      return;
    }
    setError(null);
    setSubmitted(true);

    if (isSubstackReady) {
      // Substack의 구독 페이지로 이메일 prefill해서 이동.
      // 사용자는 새 탭에서 한 번의 확인 클릭만 하면 됨.
      const url = `https://${substackHandle}.substack.com/subscribe?utm_source=namojo-blog&email=${encodeURIComponent(email)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (isButtondownReady) {
      // Buttondown은 폼 POST를 새 창에서 처리
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `https://buttondown.email/api/emails/embed-subscribe/${buttondownUsername}`;
      form.target = '_blank';
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'email';
      input.value = email;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    }
  };

  const wrapperClass =
    variant === 'card'
      ? 'rounded-3xl p-8 sm:p-10 bg-ink-900 dark:bg-ink-800 text-ink-50 relative overflow-hidden'
      : 'py-10';

  const providerNote =
    isSubstackReady
      ? 'Powered by Substack · 한 번의 확인 클릭으로 구독 완료'
      : 'Powered by Buttondown · 언제든지 구독 해지 가능';

  return (
    <section className={wrapperClass}>
      {variant === 'card' && (
        <>
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-warm-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      <div className={`${variant === 'card' ? 'relative z-10' : ''} max-w-xl`}>
        <span className="text-eyebrow uppercase text-warm-400 block mb-3">Newsletter</span>
        <h3 className={`font-display font-bold leading-tight mb-3 ${
          variant === 'card' ? 'text-2xl sm:text-3xl text-ink-50' : 'text-xl text-ink-900 dark:text-ink-50'
        }`}>
          {heading}
        </h3>
        <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
          variant === 'card' ? 'text-ink-300' : 'text-ink-600 dark:text-ink-400'
        }`}>
          {subheading}
        </p>

        {submitted ? (
          <div className={`rounded-2xl p-5 ${
            variant === 'card'
              ? 'bg-white/10 backdrop-blur-sm ring-1 ring-white/20'
              : 'bg-warm-50 dark:bg-warm-900/20 ring-1 ring-warm-200 dark:ring-warm-900'
          }`}>
            <p className={`flex items-center gap-2 text-sm font-medium ${
              variant === 'card' ? 'text-ink-50' : 'text-ink-800 dark:text-ink-200'
            }`}>
              <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
              {isSubstackReady
                ? '새 탭에서 Substack 페이지를 열었습니다. 한 번만 더 확인해 주세요.'
                : '새 창에서 구독 확인을 완료해 주세요.'}
            </p>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setEmail(''); }}
              className={`mt-3 text-xs underline ${variant === 'card' ? 'text-ink-300' : 'text-ink-500'}`}
            >
              다시 입력
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`flex-1 px-5 py-3.5 rounded-full text-sm outline-none transition-apple ${
                variant === 'card'
                  ? 'bg-white/95 text-ink-900 placeholder-ink-400 focus:bg-white focus:ring-2 focus:ring-warm-400'
                  : 'bg-white dark:bg-ink-800 text-ink-900 dark:text-ink-50 placeholder-ink-400 border border-ink-200 dark:border-ink-700 focus:border-warm-400 focus:ring-2 focus:ring-warm-200'
              }`}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-warm-500 hover:bg-warm-600 text-white font-semibold text-sm transition-apple duration-300 active:scale-[0.98] whitespace-nowrap"
            >
              구독하기
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        )}

        {error && <p className="text-xs text-coral-500 mt-3">{error}</p>}

        <p className={`text-xs mt-4 ${
          variant === 'card' ? 'text-ink-400' : 'text-ink-500'
        }`}>
          {providerNote} · 스팸 없이 저자가 쓴 글만 보내드립니다
        </p>

        {isSubstackReady && (
          <p className={`text-xs mt-2 ${variant === 'card' ? 'text-ink-500' : 'text-ink-400'}`}>
            직접 방문:{' '}
            <a
              href={`https://${substackHandle}.substack.com/`}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline hover:no-underline ${variant === 'card' ? 'text-warm-300' : 'text-warm-600'}`}
            >
              {substackHandle}.substack.com
            </a>
          </p>
        )}
      </div>
    </section>
  );
};
