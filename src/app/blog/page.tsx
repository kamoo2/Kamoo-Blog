import React from 'react';
import { allTags, reducedAllBlogPosts } from '@/lib/post';
import { ReducedPost } from '@/lib/types';
import PostListItem from '@/components/PostListItem';
import CategoryBox from '@/components/CategoryBox';

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

type Post = {
  key: string;
  postList: ReducedPost[];
};

export default function BlogPage(props: Props) {
  const allTagList = allTags;

  const searchParams = props.searchParams;
  const selectedKey = searchParams.key ? searchParams.key : 'all';
  const isAll = !selectedKey || selectedKey === 'all';
  // 맨처음 default key = all
  // selectedKey

  const tagPostList = reducedAllBlogPosts.reduce<{ [key: string]: ReducedPost[] }>((ac, post) => {
    post.tags.forEach((tag) => {
      if (!ac[tag]) ac[tag] = [];
      ac[tag].push(post);
    });
    return ac;
  }, {});

  const combinedPostWithKeys = Object.keys(tagPostList)
    .map<Post>((key) => ({
      key,
      postList: tagPostList[key],
    }))
    .sort((a, b) => b.postList.length - a.postList.length);

  // const allPostCnt = combinedPostWithKeys.reduce((ac, post) => ac + post.postList.length, 0);

  const { key, postList } = isAll
    ? {
        key: 'all',
        postList: combinedPostWithKeys.reduce<ReducedPost[]>((ac, post) => {
          post.postList.forEach((post) => {
            if (!ac.includes(post)) {
              ac.push(post);
            }
          });
          return ac;
        }, []),
      }
    : combinedPostWithKeys.filter((post) => {
        return selectedKey === post.key;
      })[0];

  return (
    <div className="flex gap-4 py-3">
      <CategoryBox className="hidden lg:block" tags={allTagList} />
      <div className="grow">
        {postList.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
