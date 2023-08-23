import type { Meta, StoryObj } from '@storybook/react';
import PostCard from '@/components/PostCard/PostCard';

const meta: Meta<typeof PostCard> = {
  title: 'Component/PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Primary: Story = {
  render: (args) => <PostCard {...args} />,
  args: {
    title: '디자인 패턴',
    alt: '디자인 패턴',
    imagePath:
      'https://images.velog.io/images/poiuyy0420/post/9123e752-1436-40ba-b3c1-b97bde07641d/desing.png',
    description: '디자인 패턴에 대해서 알아봅시다.',
    createdAt: '2023-08-21',
  },
};
