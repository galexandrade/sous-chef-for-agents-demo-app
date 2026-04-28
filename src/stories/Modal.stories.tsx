import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal, Stack, Inline } from '@7shifts/sous-chef';
import { fn, userEvent, expect, screen } from 'storybook/test';
import React, { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'SousChef/Overlay/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>
        {open && (
          <Modal
            header="Confirm action"
            onClose={() => setOpen(false)}
            rootElementId="storybook-root"
          >
            <Stack space={16}>
              <p style={{ margin: 0 }}>Are you sure you want to publish this schedule?</p>
              <Inline space={8} justifyContent="end">
                <button onClick={() => setOpen(false)}>Cancel</button>
                <button onClick={() => setOpen(false)}>Publish</button>
              </Inline>
            </Stack>
          </Modal>
        )}
      </>
    );
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));
    await expect(await screen.findByText('Confirm action')).toBeVisible();
  },
};

export const WithSubHeader: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>
        {open && (
          <Modal
            header="Add employee"
            subHeader="Fill in the details below to add a new team member."
            onClose={() => setOpen(false)}
            rootElementId="storybook-root"
          >
            <Stack space={16}>
              <p style={{ margin: 0 }}>Employee form content goes here.</p>
              <button onClick={() => setOpen(false)}>Close</button>
            </Stack>
          </Modal>
        )}
      </>
    );
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));
    await expect(
      await screen.findByText('Fill in the details below to add a new team member.')
    ).toBeVisible();
  },
};

export const NonClosable: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>
        {open && (
          <Modal header="Processing…" rootElementId="storybook-root">
            <p style={{ margin: 0 }}>Publishing your schedule. Please wait…</p>
          </Modal>
        )}
      </>
    );
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));
    await expect(await screen.findByText('Processing…')).toBeVisible();
  },
};

export const LoadingState: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>Open modal</button>
        {open && (
          <Modal
            header="Saving changes"
            loading
            onClose={fn()}
            rootElementId="storybook-root"
          >
            <p style={{ margin: 0 }}>Your changes are being saved…</p>
          </Modal>
        )}
      </>
    );
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /open modal/i }));
    await expect(await screen.findByText('Saving changes')).toBeVisible();
  },
};
