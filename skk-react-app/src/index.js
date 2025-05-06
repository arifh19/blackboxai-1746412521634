import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './auth/AuthContext';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/skk">
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
