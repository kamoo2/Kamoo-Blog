import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/layout/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: () => <Header />,
};
