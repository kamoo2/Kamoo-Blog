import { Post as TPost } from '@/contentlayer/generated';

export type Post = TPost & {
  seriesName?: string | null;
  snippetName?: string | null;
};
