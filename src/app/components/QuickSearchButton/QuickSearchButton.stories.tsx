import { Meta, StoryObj } from '@storybook/react';
import QuickSearchButton from '@/components/QuickSearchButton/QuickSearchButton';

const meta: Meta<typeof QuickSearchButton> = {
  title: 'Component/QuickSearchButton',
  component: QuickSearchButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof QuickSearchButton>;

export const Primary: Story = {
  render: () => <QuickSearchButton />,
};
