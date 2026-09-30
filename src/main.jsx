import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContextLayout from './layout/ContextLayout';
import App from './App';
import Search from './pages/Search';
import './index.css';

const router = createBrowserRouter([
  {
    element: <ContextLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
