import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@/components/layout/Footer/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  render: () => <Footer />,
};
