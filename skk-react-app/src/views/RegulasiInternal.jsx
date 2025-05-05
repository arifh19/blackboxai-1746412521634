import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegulasiInternal = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <header className="header-banner">
          <h2>REGULASI</h2>
        </header>

        <section className="kementerian-content">
          <div className="kementerian-card">
            <a href="https://bpsdm.dephub.go.id/sekolah-kedinasan" target="_blank" rel="noopener noreferrer">
              <img src="/foto/BPSDMhub.logo.png" alt="Logo bpsdm" />
              <div className="info">
                <a href="https://bpsdm.dephub.go.id/sekolah-kedinasan" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                  BADAN PENGEMBANGAN SUMBER DAYA MANUSIA PERHUBUNGAN
                </a>
                <p>Jl. Medan Merdeka Timur No.5, RT.2/RW.1 Gambir, Jakarta Pusat DKI Jakarta 10110</p>
                <p>Telp: (021) 3847519</p>
                <p>Email: <a href="mailto:humasti-bpsdmp@dephub.go.id">humasti-bpsdmp@dephub.go.id</a></p>
                <p>Website: <a href="https://bpsdm.kemenhub.go.id">bpsdm.kemenhub.go.id</a></p>
              </div>
            </a>
          </div>

          <div className="kementerian-card">
            <a href="https://kemnaker.go.id" target="_blank" rel="noopener noreferrer">
              <img src="/foto/Logo_Kementerian_Ketenagakerjaan_(2016).png" alt="Logo kementerian ketenagakerjaan" />
              <div className="info">
                <a href="https://kemnaker.go.id/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                  KEMENTERIAN KETENAGAKERJAAN REPUBLIK INDONESIA
                </a>
                <p>Jl. Jendral Gatot Subroto Kav. 51, Daerah Khusus Ibukota Jakarta 12950</p>
                <p>Telp: (021) 5255733</p>
                <p>Call Center: 1500630</p>
                <p>Email: <a href="mailto:persuratan@kemnaker.go.id">persuratan@kemnaker.go.id</a></p>
                <p>Website: <a href="https://kemnaker.go.id">kemnaker.go.id</a></p>
              </div>
            </a>
          </div>

          <div className="kementerian-card">
            <a href="https://www.kemenkeu.go.id/home" target="_blank" rel="noopener noreferrer">
              <img src="/foto/Logo_kementerian_keuangan_republik_indonesia.png" alt="Logo Kementerian keuangan" />
              <div className="info">
                <a href="https://www.kemenkeu.go.id/home" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                  KEMENTERIAN KEUANGAN REPUBLIK INDONESIA
                </a>
                <p>Gedung Djuanda I, Kementerian Keuangan, Jl. Dr. Wahidin Raya No.1, Pasar Baru, Sawah Besar, Central Jakarta City, Jakarta 10710</p>
                <p>Telp: (021) 0213449230 </p>
                <p>Call Center: 134</p>
                <p>Email: <a href="mailto:kemenkeu.prime@kemenkeu.go.id">kemenkeu.prime@kemenkeu.go.id</a></p>
                <p>Website: <a href="https://kemenkeu.go.id">kemenkeu.go.id</a></p>
              </div>
            </a>
          </div>

          <div className="kementerian-card">
            <a href="https://bnsp.go.id/" target="_blank" rel="noopener noreferrer">
              <img src="/foto/LOGO-BNSP.png" alt="Logo bnsp" />
              <div className="info">
                <a href="https://bnsp.go.id/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                  BADAN NASIONAL SERTIFIKASI PROFESI
                </a>
                <p>Jl. MT Haryono Kav. 52 Jakarta Selatan, Indonesia 12780</p>
                <p>Telp: (021) 26966525 </p>
                <p>Email: <a href="mailto:admin@bnsp.go.id">admin@bnsp.go.id</a></p>
                <p>Website: <a href="https://bnsp.go.id">bnsp.go.id</a></p>
              </div>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RegulasiInternal;
