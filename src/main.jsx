import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Support from './Support';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
        <Support />
    </React.StrictMode>
);
