import { Post, ReducedPost, TagWithCount } from '@/app/lib/types';
import { allPosts } from '@/contentlayer/generated';

export const reducePost = ({ body: _, _raw, _id, ...post }: Post): ReducedPost => post;

export const allBlogPosts: Post[] = allPosts
  .filter(
    (post) =>
      post._raw.sourceFilePath.includes('blog') && !post._raw.sourceFilePath.includes('/index.mdx'),
  )
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const reducedAllBlogPosts = allBlogPosts.map(reducePost);

export const allSnippets: Post[] = allPosts
  .filter((post) => post._raw.sourceFilePath.includes('snippets'))
  .map((snippet) => ({ ...snippet, snippetName: snippet.slug.split('/').at(2) ?? null }))
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

export const reducedAllSnippets = allSnippets.map(reducePost);

const getTagsWithCount = (kind: 'all' | 'blog' | 'snippets'): TagWithCount[] => {
  const tagCounts: Record<string, number> = {};
  let allTags: TagWithCount[] = [];

  if (kind === 'blog') {
    allBlogPosts.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!tagCounts[tag]) {
          tagCounts[tag] = 0;
        }
        tagCounts[tag]++;
      });
    });

    allTags = Object.keys(tagCounts).map((tag) => ({
      name: tag,
      count: tagCounts[tag],
    }));

    allTags.unshift({ name: 'All', count: allBlogPosts.length });
  } else if (kind === 'snippets') {
    allSnippets.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!tagCounts[tag]) {
          tagCounts[tag] = 0;
        }
        tagCounts[tag]++;
      });
    });

    allTags = Object.keys(tagCounts).map((tag) => ({
      name: tag,
      count: tagCounts[tag],
    }));

    allTags.unshift({ name: 'All', count: allSnippets.length });
  } else {
    Array.from([...allSnippets, ...allBlogPosts]).forEach((post) => {
      post.tags.forEach((tag) => {
        if (!tagCounts[tag]) {
          tagCounts[tag] = 0;
        }
        tagCounts[tag]++;
      });
    });

    allTags = Object.keys(tagCounts).map((tag) => ({
      name: tag,
      count: tagCounts[tag],
    }));

    allTags.unshift({ name: 'All', count: allSnippets.length + allBlogPosts.length });
  }
  return allTags;
};

export const allBlogTagsWithCount = getTagsWithCount('blog');

export const allSnippetTagsWithCount = getTagsWithCount('snippets');

export const allTagsWithCount = getTagsWithCount('all');
