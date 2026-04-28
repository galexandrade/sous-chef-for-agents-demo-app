import type { Meta, StoryObj } from '@storybook/react-vite';
import { Inline } from '@7shifts/sous-chef';
import React from 'react';

const meta: Meta<typeof Inline> = {
  title: 'SousChef/Layout/Inline',
  component: Inline,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Inline>;

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
        <Box label="Item one" />
        <Box label="Item two" />
        <Box label="Item three" />
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
        <Box label="Left" />
        <Box label="Right" />
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    space: 16,
    justifyContent: 'center',
    alignItems: 'center',
    children: (
      <>
        <Box label="Item one" />
        <Box label="Item two" />
        <Box label="Item three" />
      </>
    ),
  },
};

export const Wrapping: Story = {
  args: {
    space: 8,
    flexWrap: 'wrap',
    children: (
      <>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
          (day) => (
            <Box key={day} label={day} />
          )
        )}
      </>
    ),
  },
};

export const AlignedToEnd: Story = {
  args: {
    space: 12,
    justifyContent: 'end',
    children: (
      <>
        <Box label="Cancel" />
        <Box label="Save" />
      </>
    ),
  },
};
