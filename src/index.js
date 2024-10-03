import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*  basename={process.env.PUBLIC_URL} */}
    <HashRouter  />
      <App />
    <HashRouter />
  </React.StrictMode>
);

