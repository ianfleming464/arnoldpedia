import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MovieList from './routes/MovieList';
import MovieView from './MovieView';
import RootLayout from './routes/RootLayout';
import HomePage from '../src/routes/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from './theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/movies' element={<MovieList />} />
      <Route path='/movies/:id' element={<MovieView />} />
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
