import React from 'react';
import Link from 'next/link';
import { allTags, reducedAllBlogPosts } from '@/lib/post';
import { ReducedPost } from '@/lib/types';

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
    <>
      <div>
        {allTagList.map((tag) => {
          return (
            <div key={tag}>
              <Link href={`?key=${tag}`}>{tag}</Link>
            </div>
          );
        })}
      </div>
      <h1 className="text-4xl">{selectedKey}</h1>
      <ul key={key}>
        {postList.map((post) => (
          <li key={post.slug}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
