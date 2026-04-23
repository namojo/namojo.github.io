import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostCard } from '../components/PostCard';
import { SubscribeForm } from '../components/SubscribeForm';
import { getPosts } from '../services/dataService';
import { Post } from '../types';

const POSTS_PER_PAGE = 9;

export const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const latestRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    })();
  }, []);

  // HashRouter와 `#anchor`는 충돌하므로 네이티브 앵커 대신 scrollIntoView 사용
  const scrollToLatest = (e: React.MouseEvent) => {
    e.preventDefault();
    latestRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-7 w-7 border-2 border-ink-200 border-t-ink-800"></div>
      </div>
    );
  }

  const [featured, ...rest] = posts;
  const totalPages = Math.max(1, Math.ceil(rest.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const pagedPosts = useMemo(
    () => rest.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE),
    [rest, currentPage],
  );

  const goToPage = (n: number) => {
    setPage(n);
    setTimeout(() => latestRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };

  return (
    <div>
      {/* ───── HERO ───── */}
      <section className="relative w-full h-[80vh] min-h-[560px] max-h-[860px] overflow-hidden">
        <img
          src="/images/hero-home.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-end pb-16 sm:pb-20 lg:pb-28">
          <span className="text-eyebrow uppercase text-warm-300/90 mb-5">
            The Story Factory for Engineers
          </span>
          <h1 className="font-display text-white text-display-md sm:text-display-lg lg:text-display-xl max-w-3xl">
            엔지니어를 위한<br />
            <span className="text-warm-400">이야기 공장</span>
          </h1>
          <p className="mt-6 text-white/85 text-lg sm:text-xl max-w-xl leading-relaxed font-light">
            AI 기술에 인문학의 온기를 불어넣다.<br />
            2024년부터 기록해온 AI 뉴스 평론과 인문학적 IT기술론.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToLatest}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-ink-900 font-semibold text-sm hover:bg-ink-100 transition-apple duration-300"
            >
              최근 글 읽기
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition-apple duration-300 backdrop-blur-sm"
            >
              저자 소개
            </Link>
          </div>
        </div>
      </section>

      {/* ───── FEATURED ───── */}
      {featured && (
        <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 pt-24 sm:pt-32">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-eyebrow uppercase text-warm-500 block mb-2">Featured</span>
              <h2 className="font-display font-bold text-display-sm text-ink-900 dark:text-ink-50">
                가장 최근의 생각
              </h2>
            </div>
            <Link
              to={`/post/${featured.id}`}
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100 transition-apple"
            >
              읽기
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <Link
            to={`/post/${featured.id}`}
            className="group block rounded-3xl overflow-hidden bg-white dark:bg-ink-800 shadow-card hover:shadow-card-hover transition-apple duration-500"
          >
            <div className="grid md:grid-cols-12 md:gap-0">
              {featured.coverImage && (
                <div className="md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[420px] overflow-hidden relative bg-ink-100">
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-apple duration-[900ms]"
                  />
                </div>
              )}
              <div className="md:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <span className="text-eyebrow uppercase text-warm-500 mb-4">
                  {featured.category} · {featured.date}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink-900 dark:text-ink-50 leading-tight mb-4 group-hover:text-warm-600 dark:group-hover:text-warm-400 transition-apple">
                  {featured.title}
                </h3>
                <p className="text-ink-600 dark:text-ink-400 leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
                <div className="mt-6 pt-6 border-t border-ink-200 dark:border-ink-700 flex items-center gap-3">
                  <img
                    src={featured.author.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-ink-800 dark:text-ink-200">
                    {featured.author.name}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ───── LATEST POSTS ───── */}
      <section
        ref={latestRef}
        className="scroll-mt-20 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 pt-24 sm:pt-32"
      >
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-eyebrow uppercase text-warm-500 block mb-2">Latest</span>
            <h2 className="font-display font-bold text-display-sm text-ink-900 dark:text-ink-50">
              모든 글
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {pagedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-16 flex items-center justify-center gap-1.5 flex-wrap" aria-label="페이지 네비게이션">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-200 text-sm font-semibold hover:border-warm-400 disabled:opacity-40 disabled:cursor-not-allowed transition-apple"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
              이전
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
              // 총 페이지가 많으면 앞 3, 현재 주변 2, 끝 3만 표시 (ellipsis는 간단히)
              const inRange =
                totalPages <= 9 ||
                n === 1 ||
                n === totalPages ||
                (n >= currentPage - 1 && n <= currentPage + 1);
              if (!inRange) {
                if (n === 2 && currentPage > 4) return <span key={n} className="px-1 text-ink-400">…</span>;
                if (n === totalPages - 1 && currentPage < totalPages - 3) return <span key={n} className="px-1 text-ink-400">…</span>;
                return null;
              }
              const active = n === currentPage;
              return (
                <button
                  key={n}
                  onClick={() => goToPage(n)}
                  aria-current={active ? 'page' : undefined}
                  className={`min-w-[40px] h-10 rounded-full text-sm font-semibold transition-apple ${
                    active
                      ? 'bg-warm-500 text-white'
                      : 'bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 hover:border-warm-400'
                  }`}
                >
                  {n}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-ink-700 dark:text-ink-200 text-sm font-semibold hover:border-warm-400 disabled:opacity-40 disabled:cursor-not-allowed transition-apple"
            >
              다음
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </nav>
        )}

        <p className="mt-6 text-center text-xs text-ink-500">
          총 {rest.length}편 · {currentPage} / {totalPages} 페이지
        </p>
      </section>

      {/* ───── Subscribe ───── */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 pt-24 sm:pt-32 pb-12">
        <SubscribeForm variant="card" />
      </section>
    </div>
  );
};
