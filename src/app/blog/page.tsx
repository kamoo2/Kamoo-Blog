import { allTagsWithCount, reducedAllBlogPosts } from '@/app/lib/post';
import { ReducedPost } from '@/app/lib/types';
import CategoryBox from '@/components/CategoryBox';
import PostList from '@/components/PostList';

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

type PostCombinedKey = {
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
    .map<PostCombinedKey>((key) => ({
      key,
      postList: tagPostList[key],
    }))
    .sort((a, b) => b.postList.length - a.postList.length);

  const post = isAll
    ? {
        key: 'all',
        postList: reducedAllBlogPosts,
      }
    : combinedPostWithKeys.filter((post) => {
        return selectedKey === post.key.toLowerCase();
      })[0];

  return (
    <div className="flex pb-3 pt-8">
      <CategoryBox
        selectedKey={selectedKey}
        tags={allTagsWithCount}
        className="hidden min-w-fit text-[#28442E] dark:text-neutral-50 lg:block"
      />
      <PostList posts={post.postList} />
    </div>
  );
}
