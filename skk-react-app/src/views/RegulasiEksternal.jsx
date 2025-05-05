import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegulasiEksternal = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <header className="header-banner">
          <h2>REGULASI EKSTERNAL</h2>
        </header>
        <div className="document-list">
          <p><a href="/pdf/Kemnaker No. 2 Tahun 2016.pdf" target="_blank" rel="noopener noreferrer">Kemenaker nomor 2 tahun 2016</a></p>
          <p><a href="/pdf/Kemnaker No. 3 Tahun 2016.pdf" target="_blank" rel="noopener noreferrer">Kemenaker nomor 3 tahun 2016</a></p>
          <p><a href="/docs/pp64-2015.pdf" target="_blank" rel="noopener noreferrer">Kemenaker nomor 12 tahun ...</a></p>  
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegulasiEksternal;
