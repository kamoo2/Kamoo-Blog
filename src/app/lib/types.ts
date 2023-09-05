import { Post as TPost } from '@/contentlayer/generated';

// Post
export type Post = TPost & {
  seriesName?: string | null;
  snippetName?: string | null;
};

export type ReducedPost = Omit<Post, 'body' | '_raw' | '_id'>;

export type TagWithCount = {
  name: string;
  count: number;
};

export type ListOfHeading = Section[];

export type Section = {
  flag: string;
  text: string;
  parent?: string;
  isSub: boolean;
};

// Menu
export type Menu = {
  name: string;
  path: string;
};
