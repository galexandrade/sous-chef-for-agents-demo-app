import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@7shifts/sous-chef';
import { fn } from 'storybook/test';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'SousChef/Layout/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    onClick: undefined,
    onClose: undefined,
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

const cardContent = (
  <div style={{ padding: '4px 0' }}>
    <div style={{ fontWeight: 600, marginBottom: 4 }}>Morning Shift</div>
    <div style={{ fontSize: 13, color: '#555' }}>6:00 AM – 2:00 PM · Front of House</div>
  </div>
);

export const Default: Story = {
  args: {
    children: cardContent,
  },
};

export const Clickable: Story = {
  args: {
    onClick: fn(),
    children: cardContent,
  },
};

export const Closable: Story = {
  args: {
    onClose: fn(),
    children: cardContent,
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
    children: cardContent,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onClick: fn(),
    children: cardContent,
  },
};

export const WithActions: Story = {
  args: {
    actions: [
      { action: 'edit', label: 'Edit shift', onAction: fn() },
      { action: 'delete', label: 'Delete shift', onAction: fn() },
    ],
    children: cardContent,
  },
};
