// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ReactQueryProvider } from '../src/providers/react-query';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>
);
