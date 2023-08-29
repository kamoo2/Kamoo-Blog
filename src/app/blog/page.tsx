import PostListItem from '@/components/PostListItem';
import { reducedAllBlogPosts } from '@/lib/post';
import { ReducedPost } from '@/lib/types';

// type Props = {
//   params: {};
//   searchParams: { [key: string]: string | string[] | undefined };
// };

type Post = {
  key: string;
  postList: ReducedPost[];
};

export default function BlogPage() {
  const selectedKey = 'all';
  const isAll = !selectedKey || selectedKey === 'all';

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
    <div className="grow">
      {postList.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </div>
  );
}
