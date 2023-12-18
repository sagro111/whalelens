import WebApp from '@twa-dev/sdk';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from '@/app/app.tsx';

WebApp.ready();
WebApp.expand();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
