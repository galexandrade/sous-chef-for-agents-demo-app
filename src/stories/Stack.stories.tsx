import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '@7shifts/sous-chef';
import React from 'react';

const meta: Meta<typeof Stack> = {
  title: 'SousChef/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Stack>;

const Box = ({ label }: { label: string }) => (
  <div style={{ background: '#e8f4fd', padding: '8px 16px', borderRadius: 4, fontSize: 14 }}>
    {label}
  </div>
);

export const Default: Story = {
  args: {
    space: 16,
    children: (
      <>
        <Box label="First item" />
        <Box label="Second item" />
        <Box label="Third item" />
      </>
    ),
  },
};

export const SmallGap: Story = {
  args: {
    space: 8,
    children: (
      <>
        <Box label="First item" />
        <Box label="Second item" />
        <Box label="Third item" />
      </>
    ),
  },
};

export const LargeGap: Story = {
  args: {
    space: 32,
    children: (
      <>
        <Box label="First item" />
        <Box label="Second item" />
        <Box label="Third item" />
      </>
    ),
  },
};

export const CenteredItems: Story = {
  args: {
    space: 16,
    alignItems: 'center',
    children: (
      <>
        <Box label="Short" />
        <Box label="A much longer item label" />
        <Box label="Short" />
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    space: 16,
    justifyContent: 'space-between',
    children: (
      <>
        <Box label="Top item" />
        <Box label="Bottom item" />
      </>
    ),
  },
};
