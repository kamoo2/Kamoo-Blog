import type { Meta, StoryObj } from '@storybook/react';
import Hero from '@/components/Hero/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Component/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  render: () => <Hero />,
};
