import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'app-layout-frame/dist/index.css';
import '@7shifts/sous-chef/dist/index.css';
import './index.scss';
import { SousChefProvider } from '@7shifts/sous-chef';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <SousChefProvider>
            <App />
        </SousChefProvider>
    </StrictMode>
);
