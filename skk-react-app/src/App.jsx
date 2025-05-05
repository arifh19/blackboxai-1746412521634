import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './auth/AuthContext';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
