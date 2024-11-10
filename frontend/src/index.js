import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18+ uses 'react-dom/client'
import './index.css';  // Import global styles
import App from './app';  // If your file is named app.js (lowercase "a")

// Render the React app and mount it to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
