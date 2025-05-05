import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/foto/logo skk fix.png" alt="Logo SKKNI" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Beranda</Link></li>
        <li className="dropdown" onMouseEnter={() => toggleDropdown('organisasi')} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#" className="dropbtn" onClick={(e) => e.preventDefault()}>Organisasi</a>
          {dropdownOpen === 'organisasi' && (
            <ul className="dropdown-content">
              <li><Link to="/tentang-kami">Tentang Kami</Link></li>
              <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
              <li><Link to="/daftar-lsp">Daftar LSP</Link></li>
              <li><Link to="/daftar-lembaga-diklat">Daftar Lembaga Diklat</Link></li>
              <li><Link to="/daftar-asosiasi">Daftar Asosiasi</Link></li>
            </ul>
          )}
        </li>
        <li className="dropdown" onMouseEnter={() => toggleDropdown('regulasi')} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#" className="dropbtn" onClick={(e) => e.preventDefault()}>Regulasi</a>
          {dropdownOpen === 'regulasi' && (
            <ul className="dropdown-content">
              <li><Link to="/regulasi-internal">Regulasi Internal</Link></li>
              <li><Link to="/regulasi-eksternal">Regulasi Eksternal</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/agenda">Agenda</Link></li>
        <li className="dropdown" onMouseEnter={() => toggleDropdown('layanan')} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#" className="dropbtn" onClick={(e) => e.preventDefault()}>Layanan</a>
          {dropdownOpen === 'layanan' && (
            <ul className="dropdown-content">
              <li><Link to="/pengajuan-skkk">Pengajuan SKKK</Link></li>
              <li><Link to="/pengajuan-skki">Pengajuan SKKI</Link></li>
              <li><Link to="/pengajuan-skkni">Pengajuan SKKNI</Link></li>
              <li><Link to="/pengajuan-lsp">Pengajuan LSP</Link></li>
              <li><Link to="/dokumen">Dokumen</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/survey">Survey</Link></li>
        <li className="dropdown" onMouseEnter={() => toggleDropdown('media')} onMouseLeave={() => toggleDropdown(null)}>
          <a href="#" className="dropbtn" onClick={(e) => e.preventDefault()}>Media</a>
          {dropdownOpen === 'media' && (
            <ul className="dropdown-content">
              <li><Link to="/galeri">Galeri</Link></li>
              <li><Link to="/berita">Berita</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/hubungi-kami">Hubungi Kami</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
