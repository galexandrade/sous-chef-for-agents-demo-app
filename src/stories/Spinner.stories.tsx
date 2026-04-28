import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from '@7shifts/sous-chef';

const meta: Meta<typeof Spinner> = {
  title: 'SousChef/Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    theme: 'mint',
  },
};

export const Disabled: Story = {
  args: {
    theme: 'disabled',
  },
};

export const Contrast: Story = {
  args: {
    theme: 'contrast',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Pride: Story = {
  args: {
    theme: 'pride',
  },
};

export const Small: Story = {
  args: {
    theme: 'mint',
    size: 16,
  },
};

export const Large: Story = {
  args: {
    theme: 'mint',
    size: 48,
  },
};

export const Block: Story = {
  args: {
    theme: 'mint',
    block: true,
  },
};
