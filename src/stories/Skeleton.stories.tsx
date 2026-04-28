import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, Stack, Inline } from '@7shifts/sous-chef';
import React from 'react';

const meta: Meta<typeof Skeleton> = {
  title: 'SousChef/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 200,
    height: 16,
  },
};

export const AvatarSmall: Story = {
  args: {
    as: 'avatar--small',
  },
};

export const AvatarMedium: Story = {
  args: {
    as: 'avatar--medium',
  },
};

export const AvatarLarge: Story = {
  args: {
    as: 'avatar--large',
  },
};

export const Button: Story = {
  args: {
    as: 'button',
  },
};

export const Pill: Story = {
  args: {
    as: 'pill',
  },
};

export const ScheduleRowLoading: Story = {
  render: () => (
    <Stack space={12}>
      {[1, 2, 3].map((i) => (
        <Inline key={i} space={12} alignItems="center">
          <Skeleton as="avatar--small" />
          <Stack space={4}>
            <Skeleton width={120} height={14} />
            <Skeleton width={80} height={12} />
          </Stack>
        </Inline>
      ))}
    </Stack>
  ),
};
