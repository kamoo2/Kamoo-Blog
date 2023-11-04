import { MetadataRoute } from 'next';

import { blogService } from '@/lib/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kamoony.com';

  const blogPostList = blogService.postList.map((post) => ({
    url: `${baseUrl}${post.slug}`,
    lastModified: new Date(post.createdAt),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/archives`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/snippets`,
    },
    ...blogPostList,
  ];
}
