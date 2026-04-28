import type { Meta, StoryObj } from '@storybook/react-vite';
import { toast } from '@7shifts/sous-chef';
import { fn } from 'storybook/test';
import React from 'react';

const ToastTrigger = ({
  label,
  onTrigger,
}: {
  label: string;
  onTrigger: () => void;
}) => (
  <button onClick={onTrigger} style={{ padding: '8px 16px' }}>
    {label}
  </button>
);

const meta: Meta = {
  title: 'SousChef/Feedback/Toast',
  tags: ['autodocs'],
  render: () => <ToastTrigger label="Show toast" onTrigger={() => toast('Hello!')} />,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToastTrigger label="Show default toast" onTrigger={() => toast('Schedule published successfully.')} />
  ),
};

export const Danger: Story = {
  render: () => (
    <ToastTrigger
      label="Show danger toast"
      onTrigger={() => toast('Failed to publish schedule.', 'danger')}
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <ToastTrigger
      label="Show toast with action"
      onTrigger={() =>
        toast('Shift deleted.', 'default', {
          actionText: 'Undo',
          onActionClick: fn(),
        })
      }
    />
  ),
};
