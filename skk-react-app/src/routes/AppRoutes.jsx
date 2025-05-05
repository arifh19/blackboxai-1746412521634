import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import Login from '../auth/Login';
import AdminDashboard from '../views/AdminDashboard';
import UserDashboard from '../views/UserDashboard';
import ChangePassword from '../views/ChangePassword';
import DaftarLSP from '../views/DaftarLSP';
import DaftarAsosiasi from '../views/DaftarAsosiasi';
import DaftarLembagaDiklat from '../views/DaftarLembagaDiklat';

const ProtectedRoute = ({ children, requiredSubject }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check ability for requiredSubject
  const canAccess = user.ability.some(
    (a) => (a.action === 'manage' && a.subject === 'all') || (a.action === 'read' && a.subject === requiredSubject)
  );

  if (!canAccess) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute requiredSubject="dashboard">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user-dashboard"
          element={
            <ProtectedRoute requiredSubject="dashboard">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute requiredSubject="dashboard">
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/daftar-lsp"
          element={
            <ProtectedRoute requiredSubject="daftarLSP">
              <DaftarLSP />
            </ProtectedRoute>
          }
        />

        <Route
          path="/daftar-asosiasi"
          element={
            <ProtectedRoute requiredSubject="daftarAsosiasi">
              <DaftarAsosiasi />
            </ProtectedRoute>
          }
        />

        <Route
          path="/daftar-lembaga-diklat"
          element={
            <ProtectedRoute requiredSubject="daftarLembagaDiklat">
              <DaftarLembagaDiklat />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
