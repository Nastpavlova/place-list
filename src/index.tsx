import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import { store } from './app/store';

import './styles/fonts.css';
import './styles/global.css';

const root = ReactDom.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)