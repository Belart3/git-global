import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/*  basename={process.env.PUBLIC_URL} */}
    <BrowserRouter />
      <App />
    <BrowserRouter />
  </React.StrictMode>
);

