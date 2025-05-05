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
import Home from '../views/Home';

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
        <Route path="/" element={<Home />} />
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

        <Route path="/daftar-lsp" element={<DaftarLSP />} />
        <Route path="/daftar-asosiasi" element={<DaftarAsosiasi />} />
        <Route path="/daftar-lembaga-diklat" element={<DaftarLembagaDiklat />} />

        <Route path="/regulasi-internal" element={<RegulasiInternal />} />
        <Route path="/regulasi-eksternal" element={<RegulasiEksternal />} />
        <Route path="/pengajuan-skkk" element={<PengajuanSKKK />} />
        <Route path="/pengajuan-skki" element={<PengajuanSKKI />} />
        <Route path="/pengajuan-skkni" element={<PengajuanSKKNI />} />
        <Route path="/pengajuan-lsp" element={<PengajuanLSP />} />
        <Route path="/dokumen" element={<Dokumen />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/hubungi-kami" element={<HubungiKami />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
