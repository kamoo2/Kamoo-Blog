import React from 'react';
import { Post } from '@/lib/types';
import { allBlogPosts } from '@/service/posts';
import { allPosts } from '@/contentlayer/generated';
export default function BlogPage() {
  const allPostList = allBlogPosts;
  console.log(allPostList);
  return <div>BlogPage</div>;
}
