import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './design-system.css'; // Import our new design system
import './enhanced-interactions'; // Import our enhanced interactions

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
