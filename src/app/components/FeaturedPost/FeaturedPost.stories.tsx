import type { Meta, StoryObj } from '@storybook/react';
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';

const meta: Meta<typeof FeaturedPost> = {
  title: 'Component/FeaturedPost',
  component: FeaturedPost,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedPost>;

export const Primary: Story = {
  render: (args) => <FeaturedPost {...args} />,
  args: {
    title: '디자인 패턴',
    alt: '디자인 패턴',
    imagePath:
      'https://images.velog.io/images/poiuyy0420/post/9123e752-1436-40ba-b3c1-b97bde07641d/desing.png',
    description: '디자인 패턴에 대해서 알아봅시다.',
    createdAt: '2023-08-21',
  },
};
