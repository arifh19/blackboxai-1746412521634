import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Berita = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6" style={{ marginLeft: '50px', marginRight: '50px' }}>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-bold mb-4">Pencarian</h2>
            <input type="text" placeholder="Masukkan pencarian Anda" className="w-full p-2 border border-gray-300 rounded-lg mb-4" />
            
            <h2 className="text-lg font-bold mb-4">Latest Posts</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <img src="/foto/berita 1.jpg" alt="Berita 1" className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <a href="#" className="text-sm font-bold hover:text-blue-600">lsp awards</a>
                  <p className="text-xs text-gray-500">📅 Februari 28, 2025</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <img src="/foto/berita 2.jpg" alt="Berita 2" className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <a href="#" className="text-sm font-bold hover:text-blue-600">forum group discussion</a>
                  <p className="text-xs text-gray-500">📅 Februari 3, 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/4 md:ml-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/foto/berita 2.jpg" alt="Berita 1" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">berita 3</h3>
                  <p className="text-sm text-gray-600">Kdeskripsi berita 3</p>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/foto/berita 4.jpg" alt="Berita 2" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">berita 4</h3>
                  <p className="text-sm text-gray-600">deskripsi berita 4</p>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/foto/berita 2.jpg" alt="Berita 3" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">berita 5</h3>
                  <p className="text-sm text-gray-600">deskripsi berita 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Berita;
