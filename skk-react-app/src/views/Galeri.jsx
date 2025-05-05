import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Galeri = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4" style={{ marginLeft: '50px', marginRight: '50px' }}>
        <h2 className="text-center text-2xl font-bold mb-4">Galeri Kegiatan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/foto/berita 1.jpg" alt="Meeting ABUPI" className="w-full" />
            <p className="p-4 text-center text-gray-700">Meeting ABUPI dengan Asdep Pengembangan Logistik Nasional</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/foto/berita 2.jpg" alt="Meeting ABUPI" className="w-full" />
            <p className="p-4 text-center text-gray-700">Pertemuan Koordinasi Nasional</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/foto/berita 4.jpg" alt="Meeting ABUPI" className="w-full" />
            <p className="p-4 text-center text-gray-700">Diskusi Strategi Pengembangan Logistik</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/foto/foto 1.jpg" alt="Meeting ABUPI" className="w-full" />
            <p className="p-4 text-center text-gray-700">Seminar Transportasi dan Logistik</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/foto/foto 3.jpg" alt="Meeting ABUPI" className="w-full" />
            <p className="p-4 text-center text-gray-700">Kunjungan Lapangan ke Pelabuhan</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Galeri;
