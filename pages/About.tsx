import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../services/dataService';
import { authService } from '../services/authService';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { SubscribeForm } from '../components/SubscribeForm';
import { Post } from '../types';

/**
 * Apple "About" 페이지 감성 (프로필이 아니라 작가·작업의 가치를 보여주는 페이지) +
 * Airbnb 호스트 소개의 따뜻한 톤.
 */
export const About: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(authService.isAdmin());
    getPost('about').then((data) => {
      if (data) setPost(data);
    });
  }, []);

  if (!post) return <div className="min-h-[60vh] flex items-center justify-center text-ink-500">Loading…</div>;

  return (
    <article className="pb-24">
      {isAdmin && (
        <div className="max-w-[1080px] mx-auto px-6 sm:px-10 lg:px-12 pt-8 flex justify-end">
          <Link
            to="/editor/about"
            className="inline-flex items-center gap-2 px-4 py-2 bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 text-ink-700 dark:text-ink-300 rounded-full text-sm font-medium transition-apple"
          >
            <span className="material-symbols-outlined text-lg">edit</span>
            편집
          </Link>
        </div>
      )}

      {/* ───── Hero 2-col: 텍스트 + 작업실 이미지 ───── */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <span className="text-eyebrow uppercase text-warm-500 block mb-4">About</span>
            <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ink-900 dark:text-ink-50 leading-[1.1] mb-6">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-ink-600 dark:text-ink-400 leading-relaxed font-light">
              {post.excerpt}
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src="/images/author-portrait.jpg"
                alt="저자의 작업실"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── 본문 — Pretendard 장문 가독성 ───── */}
      <section className="max-w-[720px] mx-auto px-6 pt-20 sm:pt-24 text-[1.05rem]">
        <MarkdownRenderer content={post.content} />
      </section>

      {/* ───── Subscribe ───── */}
      <section className="max-w-[720px] mx-auto px-6 mt-20">
        <SubscribeForm variant="card" />
      </section>

      {/* ───── CTA ───── */}
      <section className="max-w-[720px] mx-auto px-6 mt-20 pt-10 border-t border-ink-200 dark:border-ink-700 text-center">
        <p className="text-sm text-ink-600 dark:text-ink-400 mb-6">
          이 블로그의 모든 글은 출판 예정 도서 『생존을 위한 최소한의 AI 교양』의 곁가지입니다.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-ink-900 dark:bg-ink-50 text-ink-50 dark:text-ink-900 font-semibold text-sm hover:opacity-90 transition-apple duration-300"
        >
          최근 글 보러 가기
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </section>
    </article>
  );
};
