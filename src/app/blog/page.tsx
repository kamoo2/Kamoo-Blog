import React from 'react';
import { allBlogPosts } from '@/service/posts';
export default function BlogPage() {
  const allPostList = allBlogPosts;
  console.log(allPostList);
  return <div>BlogPage</div>;
}
