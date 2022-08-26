import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as BR } from 'react-router-dom';
import './css/global.module.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BR>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BR>
);
