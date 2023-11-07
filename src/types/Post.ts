import { Post as TPost } from '@/contentlayer/generated';

export type Post = TPost & {
  seriesName?: string | null; // 시리즈 이름
  snippetName?: string | null; // 스니펫 이름
};

export type ReducedPost = Omit<Post, 'body' | '_raw' | '_id'>;

export type TagWithCount = {
  name: string;
  count: number;
};
