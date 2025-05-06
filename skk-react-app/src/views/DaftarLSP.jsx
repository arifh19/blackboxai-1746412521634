import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 5;

const DaftarLSP = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.getLSPData();
      setData(response);
      setFilteredData(response);
    } catch (err) {
      setError('Gagal memuat data LSP');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, data]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <header className="header-banner" id="home">
        <h2>DAFTAR LSP</h2>
      </header>

      <section className="filter-section">
        <input
          type="text"
          placeholder="Cari nama LSP..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded mb-4 w-1/3"
        />
      </section>

      <div style={{ marginLeft: '50px', marginRight: '50px' }}>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <table id="dataTable" border="1" className="w-full border-collapse border border-gray-300">
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
          </>
        )}
      </div>
    </>
  );
};

export default DaftarLSP;
