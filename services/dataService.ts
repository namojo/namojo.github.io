
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

export const getPosts = async (): Promise<Post[]> => {
  try {
    // Attempt to fetch from the public posts.json file (Static CMS pattern)
    // In dev, this might 404 if not set up, falling back to INITIAL_POSTS
    const response = await fetch('./posts.json');
    if (!response.ok) throw new Error('Failed to fetch posts');
    
    const data: Post[] = await response.json();
    // Filter out 'about' for the main list if it exists in the json
    return data.filter(p => p.id !== 'about');
  } catch (error) {
    console.warn('Could not fetch posts.json, falling back to initial data.', error);
    return new Promise((resolve) => {
        setTimeout(() => resolve(INITIAL_POSTS.filter(p => p.id !== 'about')), 300);
    });
  }
};

export const getPost = async (id: string): Promise<Post | undefined> => {
    try {
        const response = await fetch('./posts.json');
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
    const response = await fetch('./posts.json');
    if (!response.ok) throw new Error('Failed to fetch posts');
    const data: Post[] = await response.json();
    const set = new Set<string>();
    data.forEach(p => { if (p.category) set.add(p.category); });
    return [...set].sort((a, b) => a.localeCompare(b, 'ko'));
  } catch {
    return ['AI', 'Story'];
  }
};
