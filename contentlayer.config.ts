import { defineDocumentType, FieldDefs, makeSource } from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';

const fields: FieldDefs = {
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
  tags: { type: 'list', required: true, of: { type: 'string' } },
  thumbnail: { type: 'string', required: false },
  createdAt: { type: 'date', required: true },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`, // mdx 파일경로 패턴

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
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    readingMinutes: {
      type: 'string',
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
    wordCount: {
      type: 'number',
      resolve: (post) => post.body.raw.split(/\s+/gu).length,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      highlight,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'anchor',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener noreferrer'],
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
        },
      ],
    ],
  },
});
