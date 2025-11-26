
import { Post, Category } from '../types';
import matter from 'gray-matter';

const parseMarkdown = (markdown: string): Post => {
  const { data, content } = matter(markdown);
  return { ...data as Post, content };
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const manifestResponse = await fetch('/posts/manifest.json');
    if (!manifestResponse.ok) throw new Error('Failed to fetch manifest');
    const manifest = await manifestResponse.json();

    const posts = await Promise.all(
      manifest.posts.map(async (filename: string) => {
        const postResponse = await fetch(`/posts/${filename}`);
        if (!postResponse.ok) throw new Error(`Failed to fetch ${filename}`);
        const markdown = await postResponse.text();
        return parseMarkdown(markdown);
      })
    );
    
    return posts.filter(p => p.id !== 'about');
  } catch (error) {
    console.error('Could not fetch posts, falling back to empty array.', error);
    return [];
  }
};

export const getPost = async (id: string): Promise<Post | undefined> => {
    try {
        const filename = id === 'about' ? 'about.md' : `${id}.md`;
        const postResponse = await fetch(`/posts/${filename}`);
        if (!postResponse.ok) throw new Error(`Failed to fetch ${filename}`);
        const markdown = await postResponse.text();
        return parseMarkdown(markdown);
    } catch (error) {
        console.error(`Could not fetch post ${id}, falling back to undefined.`, error);
        return undefined;
    }
}

export const getCategories = (): Category[] => [
  { name: 'AI', count: 1, icon: 'smart_toy', slug: 'ai' },
  { name: 'Agile', count: 1, icon: 'sprint', slug: 'agile' },
  { name: 'Drawing', count: 1, icon: 'brush', slug: 'drawing' },
  { name: 'Story', count: 2, icon: 'auto_stories', slug: 'story' },
];
