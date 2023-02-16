import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './theme';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
