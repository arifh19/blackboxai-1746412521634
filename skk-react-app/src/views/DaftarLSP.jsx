import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

const initialData = [
  {
    logo: '/foto/BP3IP.jpeg',
    name: 'LSP BP3IP JAKARTA',
    kategori: 'P1',
    asesor: 29,
    tuk: 11,
    skema: 10,
  },
  {
    logo: '/foto/petrosea.png',
    name: 'LSP PETROSEA',
    kategori: 'P2',
    asesor: 52,
    tuk: 4,
    skema: 9,
  },
  {
    logo: '/foto/translog indo.png',
    name: 'LSP Transportasi dan Logistik Indonesia',
    kategori: 'P3',
    asesor: 51,
    tuk: 72,
    skema: 53,
  },
  // Add more data as needed
];

const ITEMS_PER_PAGE = 2;

const DaftarLSP = () => {
  const [filterKategori, setFilterKategori] = useState('');
  const [filterJudul, setFilterJudul] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = initialData.filter(item => {
    return (
      (filterKategori === '' || item.kategori === filterKategori) &&
      (filterJudul === '' || item.name.toLowerCase().includes(filterJudul.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const currentData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterKategoriChange = (e) => {
    setFilterKategori(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterJudulChange = (e) => {
    setFilterJudul(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <header className="header-banner" id="home">
        <h2>DAFTAR LSP</h2>
      </header>

      <section className="filter-section">
        <select
          id="filter-kategori"
          value={filterKategori}
          onChange={handleFilterKategoriChange}
        >
          <option value="">-- Semua Kategori --</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <input
          type="text"
          id="filter-judul"
          placeholder="Cari"
          value={filterJudul}
          onChange={handleFilterJudulChange}
        />
      </section>

      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        <table id="dataTable" border="1">
          <thead>
            <tr>
              <th>Logo LSP</th>
              <th>Nama LSP</th>
              <th>Kategori</th>
              <th>Data Asesor</th>
              <th>Data TUK</th>
              <th>Data Skema</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={index}>
                  <td><img src={item.logo} alt="logo" width="90" /></td>
                  <td>{item.name}</td>
                  <td>{item.kategori}</td>
                  <td>{item.asesor}</td>
                  <td>{item.tuk}</td>
                  <td>{item.skema}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">Data tidak ditemukan</td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
      <Footer />
    </>
  );
};

export default DaftarLSP;
