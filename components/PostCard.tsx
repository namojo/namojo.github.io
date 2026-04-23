import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
}

/**
 * Airbnb 숙소 카드 감성 + Apple 제품 카드의 정돈된 메타 처리.
 * - 이미지가 상단 2/3 점유 (이미지 중심)
 * - 호버 시 이미지 스케일 1.03, 카드 리프트 -translate-y-1 + 그림자 깊어짐
 * - 메타는 상단 eyebrow(카테고리) + 하단 저자·날짜로 양극 배치
 */
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link
      to={`/post/${post.id}`}
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 hover:border-transparent hover:shadow-card-hover hover:-translate-y-1 transition-apple duration-500"
    >
      {/* Cover */}
      <div className="aspect-[4/3] w-full overflow-hidden relative bg-ink-100 dark:bg-ink-700">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-apple duration-[900ms]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink-300">
            <span className="material-symbols-outlined text-5xl">image</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-white/95 dark:bg-ink-900/80 backdrop-blur-sm text-ink-800 dark:text-ink-100">
            {post.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/95 dark:bg-ink-900/80 backdrop-blur-sm text-coral-500 text-xs font-semibold">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              favorite
            </span>
            {post.likes}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-7">
        <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-warm-500 block mb-3">
          {post.date}
        </span>
        <h3 className="font-display font-bold text-xl leading-snug text-ink-900 dark:text-ink-50 mb-3 line-clamp-2 group-hover:text-warm-600 dark:group-hover:text-warm-400 transition-apple">
          {post.title}
        </h3>
        <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed line-clamp-2 mb-5">
          {post.excerpt}
        </p>
        {/* 작성자·읽기 링크는 단독 저자 블로그라 생략 (사용자 요청) */}
      </div>
    </Link>
  );
};
