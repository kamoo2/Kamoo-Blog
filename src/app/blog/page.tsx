import { allTagsWithCount, reducedAllBlogPosts } from '@/app/lib/post';
import { ReducedPost } from '@/app/lib/types';
import CategoryBox from '@/components/CategoryBox';
import PostListItem from '@/components/PostListItem';

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

type Post = {
  key: string;
  postList: ReducedPost[];
};

export default function BlogPage(props: Props) {
  const selectedKey = props.searchParams['key'];
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

  const post = isAll
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
        return selectedKey === post.key.toLowerCase();
      })[0];

  return (
    <div className="flex pb-3 pr-7 pt-8">
      <CategoryBox
        selectedKey={selectedKey}
        tags={allTagsWithCount}
        className="hidden min-w-fit text-[#28442E] lg:block"
      />
      <div className="grid grow grid-cols-1 gap-x-10 md:grid-cols-2">
        {post.postList.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
