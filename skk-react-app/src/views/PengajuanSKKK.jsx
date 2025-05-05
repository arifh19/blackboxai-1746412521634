import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PengajuanSKKK = () => {
  return (
    <>
      <Navbar />
      <header className="header-banner" id="beranda">
        <h2>PENGAJUAN SKKK</h2>
      </header>

      <section className="content" style={{ marginLeft: '50px', marginRight: '50px' }}>
        <p>Ini adalah halaman beranda.</p>
      </section>
      <Footer />
    </>
  );
};

export default PengajuanSKKK;
