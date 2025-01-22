import React from 'react';
import {createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Router from './routes.js';

const conteiner = document.getElementById('root');
const root = createRoot(conteiner!);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
