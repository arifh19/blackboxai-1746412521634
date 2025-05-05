import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import TentangKami from '../views/TentangKami';
import StrukturOrganisasi from '../views/StrukturOrganisasi';
import DaftarLSP from '../views/DaftarLSP';
import DaftarAsosiasi from '../views/DaftarAsosiasi';
import DaftarLembagaDiklat from '../views/DaftarLembagaDiklat';
import RegulasiInternal from '../views/RegulasiInternal';
import RegulasiEksternal from '../views/RegulasiEksternal';
import Agenda from '../views/Agenda';
import PengajuanSKKK from '../views/PengajuanSKKK';
import PengajuanSKKI from '../views/PengajuanSKKI';
import PengajuanSKKNI from '../views/PengajuanSKKNI';
import PengajuanLSP from '../views/PengajuanLSP';
import Dokumen from '../views/Dokumen';
import Survey from '../views/Survey';
import Galeri from '../views/Galeri';
import Berita from '../views/Berita';
import HubungiKami from '../views/HubungiKami';
import Login from '../auth/Login';
import Register from '../auth/Register';
// Import other views as needed

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/daftar-lsp" element={<DaftarLSP />} />
        <Route path="/daftar-asosiasi" element={<DaftarAsosiasi />} />
        <Route path="/daftar-lembaga-diklat" element={<DaftarLembagaDiklat />} />
        <Route path="/regulasi-internal" element={<RegulasiInternal />} />
        <Route path="/regulasi-eksternal" element={<RegulasiEksternal />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/pengajuan-skkk" element={<PengajuanSKKK />} />
        <Route path="/pengajuan-skki" element={<PengajuanSKKI />} />
        <Route path="/pengajuan-skkni" element={<PengajuanSKKNI />} />
        <Route path="/pengajuan-lsp" element={<PengajuanLSP />} />
        <Route path="/dokumen" element={<Dokumen />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/hubungi-kami" element={<HubungiKami />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
