import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StrukturOrganisasi = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <header className="header-banner">
          <h2>Struktur Organisasi Standar Kompetensi Kerja</h2>
        </header>

        <section className="struktur-content">
          <h3>STRUKTUR ORGANISASI KOMITE STANDAR KOMPETENSI KERJA TRANSPORTASI</h3>
          <img src="/foto/struktur.png" alt="Struktur Organisasi" className="struktur-img" />

          <section className="struktur-content">
            <h3>STRUKTUR ORGANISASI PROGRAM KERJA KOMITE STANDAR KOMPETENSI KERJA TRANSPORTASI</h3>
            <img src="/foto/pokja.png" alt="Struktur Program Kerja" className="struktur-img" />

            <section className="struktur-content">
              <h3>STRUKTUR ORGANISASI SEKRETARIAT KOMITE STANDAR KOMPETENSI KERJA TRANSPORTASI</h3>
              <img src="/foto/set komite.png" alt="Struktur Sekretariat" className="struktur-img" />
            </section>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default StrukturOrganisasi;
