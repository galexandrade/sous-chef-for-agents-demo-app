import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from '@7shifts/sous-chef';
import { fn, userEvent, expect } from 'storybook/test';
import React from 'react';

const meta: Meta<typeof TextField> = {
  title: 'SousChef/Forms/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onBlur: fn(),
    onFocus: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    name: 'first-name',
    label: 'First name',
    placeholder: 'Enter your first name',
  },
};

export const WithCaption: Story = {
  args: {
    name: 'employee-id',
    label: 'Employee ID',
    caption: 'Your unique ID assigned by HR.',
    placeholder: 'e.g. EMP-1234',
  },
};

export const WithError: Story = {
  args: {
    name: 'email',
    label: 'Email address',
    value: 'not-an-email',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    name: 'username',
    label: 'Username',
    value: 'john.doe',
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    name: 'hourly-rate',
    label: 'Hourly rate',
    prefix: '$',
    placeholder: '0.00',
  },
};

export const WithSuffix: Story = {
  args: {
    name: 'break-duration',
    label: 'Break duration',
    suffix: 'min',
    placeholder: '30',
  },
};

export const TypingInteraction: Story = {
  args: {
    name: 'search',
    label: 'Search employees',
    placeholder: 'Type a name…',
  },
  play: async ({ canvas }) => {
    const input = canvas.getByRole('textbox', { name: /search employees/i });
    await userEvent.click(input);
    await userEvent.type(input, 'Jordan');
    await expect(input).toHaveValue('Jordan');
  },
};
