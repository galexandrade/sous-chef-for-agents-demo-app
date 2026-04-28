import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@7shifts/sous-chef';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    theme: {
      description: 'Visual style of the button.',
      control: 'select',
      options: ['default', 'primary', 'danger', 'upsell', 'hollow', 'hollow-contrast', 'link-primary', 'link-danger', 'link-toolbar', 'link-icon'],
    },
    size: {
      description: 'full-width fills the container. min-width-100 is used for CTA buttons in forms and modals.',
      control: 'select',
      options: ['full-width', 'min-width-100'],
    },
    disabled: {
      description: 'Disables the button',
      control: 'boolean',
    },
    loading: {
      description: 'Shows loading spinner — use while awaiting async action',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
User-initiated actions.

**Do:** Use \`primary\` for the main CTA. Use \`default\` for secondary actions. Use \`hollow\` for low-emphasis actions.
**Don't:** Use Button for navigation — use Link instead. Never more than one primary per view.
**Import:** \`import { Button } from '@7shifts/sous-chef'\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { theme: 'primary', children: 'Save changes' },
};

export const Default: Story = {
  args: { theme: 'default', children: 'Cancel' },
};

export const Danger: Story = {
  args: { theme: 'danger', children: 'Delete shift' },
};

export const Hollow: Story = {
  args: { theme: 'hollow', children: 'Export' },
};

export const Loading: Story = {
  args: { theme: 'primary', children: 'Saving...', loading: true },
};

export const Disabled: Story = {
  args: { theme: 'primary', children: 'Save changes', disabled: true },
};

export const LinkPrimary: Story = {
  args: { theme: 'link-primary', children: 'View details' },
};
