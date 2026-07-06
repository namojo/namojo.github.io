
import { Post, Category } from '../types';

// Initial data — posts.json을 fetch하지 못할 때의 폴백.
// 사용자 요청(2026-04-24)에 따라 기존 샘플 4편을 삭제했다. about 엔트리만 유지.
const INITIAL_POSTS: Post[] = [
  {
    id: 'about',
    title: '조남호 — 엔지니어이자 작가입니다.',
    excerpt: "차가운 기술에 따뜻한 온기를 불어넣는 '인문학적 IT기술론'을 이야기합니다.",
    content: `
안녕하세요. 조남호입니다. 이 블로그 **엔지니어를 위한 이야기 공장**을 운영합니다.
    `,
    coverImage: '/images/author-avatar.jpg',
    date: 'Updated Apr 2026',
    likes: 999,
    author: {
      name: '조남호 (namojo)',
      avatar: '/images/author-avatar.jpg',
    },
    tags: ['Profile', 'About'],
    category: 'Story',
  },
];

/**
 * 목록에 노출할 포스트를 정규화한다.
 * 1) 'about' 제외
 * 2) id 기준 중복 제거 (배포 시 build_posts_json.py가 중복 엔트리를 만들면
 *    React key 충돌로 카드가 비거나 같은 글이 여러 번 보이는 사고가 났었다.
 *    빌드 스크립트에서도 막지만, 여기서 한 번 더 방어한다.)
 * 3) 날짜 내림차순 정렬 ('May 8, 2026' 형식은 Date로 파싱 가능)
 */
const normalizePosts = (data: Post[]): Post[] => {
  const seen = new Set<string>();
  const unique = data.filter((p) => {
    if (p.id === 'about') return false;
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
  return unique.sort((a, b) => {
    const ta = Date.parse(a.date);
    const tb = Date.parse(b.date);
    if (isNaN(ta) || isNaN(tb)) return 0; // 파싱 실패 시 원래 순서 유지
    return tb - ta;
  });
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    // Attempt to fetch from the public posts.json file (Static CMS pattern)
    // In dev, this might 404 if not set up, falling back to INITIAL_POSTS
    const response = await fetch(`./posts.json?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch posts');

    const data: Post[] = await response.json();
    return normalizePosts(data);
  } catch (error) {
    console.warn('Could not fetch posts.json, falling back to initial data.', error);
    return new Promise((resolve) => {
        setTimeout(() => resolve(normalizePosts(INITIAL_POSTS)), 300);
    });
  }
};

export const getPost = async (id: string): Promise<Post | undefined> => {
    try {
        const response = await fetch(`./posts.json?v=${Date.now()}`, { cache: 'no-store' });
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await response.json();
        return data.find(p => p.id === id);
    } catch (error) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(INITIAL_POSTS.find(p => p.id === id)), 200);
        });
    }
}

export const getCategories = (): Category[] => [
  { name: 'AI', count: 12, icon: 'smart_toy', slug: 'ai' },
  { name: 'Agile', count: 8, icon: 'sprint', slug: 'agile' },
  { name: 'Drawing', count: 5, icon: 'brush', slug: 'drawing' },
  { name: 'Story', count: 10, icon: 'auto_stories', slug: 'story' },
];

/**
 * 현재 posts.json에 실제로 사용 중인 카테고리 이름 목록.
 * Editor의 카테고리 드롭다운에서 쓰이며, 사용자가 '+ 새 카테고리'로
 * 목록에 없는 카테고리를 입력할 수 있다.
 */
export const getUsedCategories = async (): Promise<string[]> => {
  try {
    const response = await fetch(`./posts.json?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch posts');
    const data: Post[] = await response.json();
    const set = new Set<string>();
    data.forEach(p => { if (p.category) set.add(p.category); });
    return [...set].sort((a, b) => a.localeCompare(b, 'ko'));
  } catch {
    return ['AI', 'Story'];
  }
};
