// contentlayer.config.ts
import { defineDocumentType } from "contentlayer/source-files";
import readingTime from "reading-time";
var fields = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  tags: { type: "list", required: true, of: { type: "string" } },
  thumbnail: { type: "string", required: false },
  createdAt: { type: "date", required: true }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  // mdx 파일경로 패턴
  // mdx로 작성한 글 정보에 대해 입력해야 하는 필드 정의
  /**
   * [필드명] : {
   *   type: '자료형',
   *   required: '필수여부'
   * }
   */
  fields,
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    },
    readingMinutes: {
      type: "string",
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes)
    },
    wordCount: {
      type: "number",
      resolve: (post) => post.body.raw.split(/\s+/gu).length
    }
  }
}));
export {
  Post
};
//# sourceMappingURL=compiled-contentlayer-config-HPIRAC5Q.mjs.map
