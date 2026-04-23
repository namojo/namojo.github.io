import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Post } from '../types';
import { getPosts } from '../services/dataService';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { ShareButtons } from '../components/ShareButtons';
import { Comments } from '../components/Comments';
import { SubscribeForm } from '../components/SubscribeForm';
import { authService } from '../services/authService';
import { SITE } from '../config';

/**
 * Apple 제품 상세 페이지 감성:
 * - 타이트한 중앙 정렬 본문 (max-w 680px)
 * - 커버 이미지는 카드 안이 아니라 본문 위에서 "breakout" (1080px)
 * - 메타는 심플한 단일 라인
 * - 좋아요·공유는 하단에서 따뜻한 톤으로 (Airbnb)
 */
export const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsAdmin(authService.isAdmin());
    (async () => {
      const posts = await getPosts();
      const found = posts.find((p) => p.id === id);
      if (found) {
        setPost(found);
        const liked = JSON.parse(localStorage.getItem('liked_posts') || '{}');
        const hasLiked = !!liked[found.id];
        setIsLiked(hasLiked);
        // 저장된 좋아요면 +1을 반영해 표시 (로컬 누적만, 소셜 프루프 용도)
        setLikes(found.likes + (hasLiked ? 1 : 0));
      }
      setLoading(false);
      // 포스트 진입 시 상단 스크롤
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    })();
  }, [id]);

  const handleLike = () => {
    if (!post) return;
    const next = !isLiked;
    setIsLiked(next);
    setLikes((v) => (next ? v + 1 : v - 1));
    const liked = JSON.parse(localStorage.getItem('liked_posts') || '{}');
    if (next) liked[post.id] = true;
    else delete liked[post.id];
    localStorage.setItem('liked_posts', JSON.stringify(liked));
  };

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center text-ink-500">Loading…</div>;
  if (!post) return <div className="min-h-[60vh] flex items-center justify-center text-ink-500">글을 찾을 수 없습니다.</div>;

  return (
    <article className="pb-24">
      {/* Admin toolbar */}
      {isAdmin && (
        <div className="max-w-[1080px] mx-auto px-6 sm:px-10 lg:px-12 pt-8">
          <div className="flex justify-end">
            <Link
              to={`/editor/${post.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink-100 dark:bg-ink-800 hover:bg-ink-200 dark:hover:bg-ink-700 text-ink-700 dark:text-ink-300 rounded-full text-sm font-medium transition-apple"
            >
              <span className="material-symbols-outlined text-lg">edit</span>
              편집
            </Link>
          </div>
        </div>
      )}

      {/* ───── Header — Apple 타이틀 스케일 ───── */}
      <header className="max-w-[720px] mx-auto px-6 pt-16 sm:pt-24 pb-10 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-eyebrow uppercase text-warm-600 dark:text-warm-400 hover:text-warm-700 mb-6 transition-apple"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          {post.category}
        </Link>
        <h1 className="font-display font-bold text-display-md sm:text-display-lg text-ink-900 dark:text-ink-50 leading-[1.12] mb-8">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-sm text-ink-600 dark:text-ink-400">
          <img src={post.author.avatar} alt="" className="w-8 h-8 rounded-full ring-1 ring-ink-200" />
          <span className="font-medium text-ink-800 dark:text-ink-200">{post.author.name}</span>
          <span className="text-ink-300">·</span>
          <time>{post.date}</time>
        </div>
      </header>

      {/* ───── Cover — Apple 풀 블리드 이미지 ───── */}
      {post.coverImage && (
        <div className="max-w-[1080px] mx-auto px-6 sm:px-10 lg:px-12 mb-16">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-card">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* ───── Body — Apple 읽기 폭 (720px), Pretendard ───── */}
      <div className="max-w-[720px] mx-auto px-6 text-[1.05rem]">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* ───── Actions — Like + Share ───── */}
      <div className="max-w-[720px] mx-auto px-6 mt-20 pt-10 border-t border-ink-200 dark:border-ink-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <button
            onClick={handleLike}
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-apple duration-300 active:scale-95 ${
              isLiked
                ? 'bg-coral-500 text-white shadow-lg shadow-coral-500/30'
                : 'bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-200 hover:border-coral-500 hover:text-coral-500'
            }`}
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
            <span>{likes}</span>
            <span className="text-sm font-normal opacity-80">{isLiked ? '좋아요 완료' : '좋아요'}</span>
          </button>

          <ShareButtons title={post.title} postId={post.id} />
        </div>
      </div>

      {/* ───── Tags ───── */}
      {post.tags.length > 0 && (
        <div className="max-w-[720px] mx-auto px-6 mt-12">
          <h3 className="text-eyebrow uppercase text-ink-500 mb-4">태그</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 text-sm font-medium hover:bg-warm-100 dark:hover:bg-warm-900 hover:text-warm-700 dark:hover:text-warm-300 cursor-pointer transition-apple"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* ───── Subscribe — 글 끝에서 자연스럽게 구독 제안 ───── */}
      <div className="max-w-[720px] mx-auto px-6 mt-20">
        <SubscribeForm
          variant="card"
          heading="이런 글, 메일함으로 받아보시겠어요?"
          subheading="새 글이 올라오면 바로 보내드립니다. 저자가 직접 쓴 글만 도착해요."
        />
      </div>

      {/* ───── Comments ───── */}
      <div className="max-w-[720px] mx-auto px-6">
        <Comments
          postId={post.id}
          title={post.title}
          url={`${SITE.url}/p/${post.id}/`}
        />
      </div>
    </article>
  );
};
