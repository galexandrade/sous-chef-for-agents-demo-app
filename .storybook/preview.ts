import type { Preview } from '@storybook/react-vite';
import { SousChefProvider } from '@7shifts/sous-chef';
import '@7shifts/sous-chef/dist/index.css';
import React from 'react';

const preview: Preview = {
    decorators: [
        (Story) => React.createElement(SousChefProvider, null, React.createElement(Story))
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        a11y: {
            test: 'todo'
        }
    }
};

export default preview;
