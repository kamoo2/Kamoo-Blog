import { allBlogPosts } from '@/lib/post';

export default function PostPage({ params: { slug } }: { params: { slug: string[] } }) {
  console.log(slug);
  const path = `/blog/${slug.join('/')}`;
  return <div>{path}</div>;
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug.split('/').slice(2),
  }));
}
