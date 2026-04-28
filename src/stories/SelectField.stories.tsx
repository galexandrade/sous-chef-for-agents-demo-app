import type { Meta, StoryObj } from '@storybook/react-vite';
import { SelectField } from '@7shifts/sous-chef';
import { fn } from 'storybook/test';
import React from 'react';

const roleOptions = [
  { value: 'manager', label: 'Manager' },
  { value: 'bartender', label: 'Bartender' },
  { value: 'server', label: 'Server' },
  { value: 'host', label: 'Host' },
  { value: 'kitchen', label: 'Kitchen Staff' },
];

const meta: Meta<typeof SelectField> = {
  title: 'SousChef/Forms/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
};
export default meta;

type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  args: {
    name: 'role',
    label: 'Role',
    options: roleOptions,
    placeholder: 'Select a role…',
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: 'role',
    label: 'Role',
    options: roleOptions,
    defaultValue: { value: 'server', label: 'Server' },
  },
};

export const Clearable: Story = {
  args: {
    name: 'role',
    label: 'Role',
    options: roleOptions,
    defaultValue: { value: 'bartender', label: 'Bartender' },
    isClearable: true,
  },
};

export const WithError: Story = {
  args: {
    name: 'role',
    label: 'Role',
    options: roleOptions,
    error: 'Please select a role to continue.',
  },
};

export const WithCaption: Story = {
  args: {
    name: 'role',
    label: 'Role',
    options: roleOptions,
    caption: 'This determines what the employee can access.',
  },
};

export const Disabled: Story = {
  args: {
    name: 'role',
    label: 'Role',
    options: roleOptions,
    defaultValue: { value: 'manager', label: 'Manager' },
    disabled: true,
  },
};

export const GroupedOptions: Story = {
  args: {
    name: 'location-role',
    label: 'Position',
    options: [
      {
        label: 'Front of House',
        options: [
          { value: 'server', label: 'Server' },
          { value: 'host', label: 'Host' },
          { value: 'bartender', label: 'Bartender' },
        ],
      },
      {
        label: 'Back of House',
        options: [
          { value: 'cook', label: 'Cook' },
          { value: 'dishwasher', label: 'Dishwasher' },
          { value: 'prep', label: 'Prep Cook' },
        ],
      },
    ],
    placeholder: 'Choose a position…',
  },
};
