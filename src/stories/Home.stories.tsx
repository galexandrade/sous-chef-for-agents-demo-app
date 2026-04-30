import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent } from 'storybook/test';
import Home from '../pages/Home';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {};

export const StatCards: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Total Employees')).toBeVisible();
    await expect(canvas.getByText('24')).toBeVisible();
    await expect(canvas.getByText('Shifts This Week')).toBeVisible();
    await expect(canvas.getByText('87')).toBeVisible();
    await expect(canvas.getByText('Pending Approvals')).toBeVisible();
    await expect(canvas.getByText('5')).toBeVisible();
  },
};

export const RecentActivity: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Recent Activity')).toBeVisible();
    await expect(canvas.getByText('John added a shift')).toBeVisible();
    await expect(canvas.getByText('Sarah requested time off')).toBeVisible();
    await expect(canvas.getByText('Weekly payroll processed')).toBeVisible();
  },
};

export const QuickActions: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /build schedule/i })).toBeEnabled();
    await expect(canvas.getByRole('button', { name: /add employee/i })).toBeEnabled();
    await expect(canvas.getByRole('button', { name: /run payroll/i })).toBeEnabled();
    await userEvent.click(canvas.getByRole('button', { name: /build schedule/i }));
  },
};
