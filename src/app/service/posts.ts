import { allPosts } from '@/contentlayer/generated';
import { Post } from '@/lib/types';

export const allBlogPosts: Post[] = allPosts
  .filter(
    (post) =>
      post._raw.sourceFilePath.includes('blog') && !post._raw.sourceFilePath.includes('/index.mdx'),
  )
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const allSnippets: Post[] = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('snippets'))
  .map((snippet) => ({ ...snippet, snippetName: snippet.slug.split('/').at(2) ?? null }))
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const allTags = Array.from(
  [...allBlogPosts, ...allSnippets].reduce((ac, v) => {
    v.tags.forEach((tag) => ac.add(tag));
    return ac;
  }, new Set<string>([])),
).filter(Boolean);
