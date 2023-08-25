import { Post as TPost } from '@/contentlayer/generated';

export type Post = TPost & {
  seriesName?: string | null;
  snippetName?: string | null;
};

export type ReducedPost = Omit<Post, 'body' | '_raw' | '_id'>;

export type TagWithCount = {
  name: string;
  count: number;
};
