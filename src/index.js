import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Changed back to the original CSS import
import App from './App';  // Changed back to the original App import

// Using a more descriptive variable name
const rootElement = document.getElementById('root');

// Using nullish coalescing operator for safety
const root = createRoot(rootElement ?? document.body);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);