import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProxyUser from "./proxy/ProxyUser";

const root = ReactDOM.createRoot(document.getElementById('root'));
new ProxyUser(() => {}, () => {})
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
