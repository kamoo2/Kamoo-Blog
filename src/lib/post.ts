import { allPosts } from '@/contentlayer/generated';
import { Post, ReducedPost, TagWithCount } from '@/types/Post';

class PostService {
  private countTagManager = new CounterTagManager();
  private extractEssentialPostData = ({ body: _, _raw, _id, ...post }: Post): ReducedPost => post;

  protected transformToReducePosts = (posts: Post[]) => posts.map(this.extractEssentialPostData);

  protected createTagCountArray = (posts: Post[]) => {
    return this.countTagManager.createTagCountList(posts);
  };
}

class BlogService extends PostService {
  postList: Post[];
  tagCountList: TagWithCount[];
  reducedPostList: ReducedPost[];
  constructor() {
    super();
    this.postList = allPosts
      .filter((post: Post) => post._raw.sourceFilePath.includes('blog'))
      .sort(
        (postA, postB) => new Date(postB.createdAt).getTime() - new Date(postA.createdAt).getTime()
      );

    this.tagCountList = this.createTagCountArray(this.postList);
    this.reducedPostList = this.transformToReducePosts(this.postList);
  }
}

class SnippetService extends PostService {
  postList: Post[];
  tagCountList: TagWithCount[];
  reducedPostList: ReducedPost[];
  constructor() {
    super();
    this.postList = allPosts
      .filter((post) => post._raw.sourceFilePath.includes('snippets'))
      .map((snippet) => ({ ...snippet, snippetName: snippet.slug.split('/').at(2) ?? null }))
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    this.tagCountList = this.createTagCountArray(this.postList);
    this.reducedPostList = this.transformToReducePosts(this.postList);
  }
}

class CounterTagManager {
  private result: TagWithCount[];
  private tagCounts: Record<string, number>;
  constructor() {
    this.result = [];
    this.tagCounts = {};
  }
  private reset = () => {
    this.result = [];
    this.tagCounts = {};
  };

  private createProcess = (postList: Post[]) => {
    postList.forEach((post) => {
      post.tags.forEach((tag) => {
        if (!this.tagCounts[tag]) {
          this.tagCounts[tag] = 0;
        }
        this.tagCounts[tag]++;
      });
    });
    this.result = Object.keys(this.tagCounts).map((tag) => ({
      name: tag,
      count: this.tagCounts[tag],
    }));

    this.result.unshift({ name: 'All', count: postList.length });
  };

  createTagCountList = (postList: Post[]) => {
    this.reset();
    this.createProcess(postList);
    return this.result;
  };
}

export const blogService = new BlogService();
export const snippetService = new SnippetService();
