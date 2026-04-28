import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, expect, screen } from 'storybook/test';
import Schedule from '../pages/Schedule';

const meta: Meta<typeof Schedule> = {
  title: 'Pages/Schedule',
  component: Schedule,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Schedule>;

export const Default: Story = {};

export const WeekNavigation: Story = {
  play: async ({ canvas }) => {
    const nextBtn = canvas.getByTestId('next-week-btn');
    await userEvent.click(nextBtn);
    const prevBtn = canvas.getByTestId('prev-week-btn');
    await userEvent.click(prevBtn);
    await userEvent.click(prevBtn);
    await expect(canvas.getByTestId('next-week-btn')).toBeVisible();
  },
};

export const PublishButton: Story = {
  play: async ({ canvas }) => {
    const publishBtn = canvas.getByRole('button', { name: /publish schedule/i });
    await expect(publishBtn).toBeVisible();
    await expect(publishBtn).toBeEnabled();
  },
};
