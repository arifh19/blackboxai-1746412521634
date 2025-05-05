import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dokumen = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <header className="header-banner">
          <h2>REGULASI EKSTERNAL</h2>
        </header>
        <div className="document-list">
          <p><a href="/pdf/STANDAR OPERASIONAL PROSEDUR  PENGAJUAN STANDAR KOMPETENSI KERJA KHUSUS compressed.pdf" target="_blank" rel="noopener noreferrer">Standar Operasional Prosedur  Pengajuan Standar Kompetensi Kerja Khusus</a></p>
          <p><a href="/excel/FORM RANCANGAN PETA OKUPASI .xlsx" target="_blank" rel="noopener noreferrer">Rancangan Peta Okupasi</a></p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dokumen;
