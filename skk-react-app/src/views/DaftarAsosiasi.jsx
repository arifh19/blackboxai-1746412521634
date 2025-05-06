import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ITEMS_PER_PAGE = 5;

const DaftarAsosiasi = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMatra, setFilterMatra] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.getAsosiasiData();
      setData(response);
      setFilteredData(response);
    } catch (err) {
      setError('Gagal memuat data Asosiasi');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) => {
      return (
        (filterMatra === '' || item.matra === filterMatra) &&
        (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, filterMatra, data]);

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
      <Navbar />
      <header className="header-banner" id="home">
        <h2>DAFTAR ASOSIASI</h2>
      </header>

      <section className="filter-section flex space-x-4 mb-4">
        <select
          id="filter-matra"
          value={filterMatra}
          onChange={(e) => setFilterMatra(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">-- Matra --</option>
          <option value="Darat">Darat</option>
          <option value="Laut">Laut</option>
          <option value="Udara">Udara</option>
        </select>
        <input
          type="text"
          placeholder="Cari nama Asosiasi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded flex-1"
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
                  <th>Logo Asosiasi</th>
                  <th>Nama Asosiasi</th>
                  <th>MATRA</th>
                  <th>Alamat</th>
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((item, index) => (
                    <tr key={index}>
                      <td><img src={item.logo} alt="logo" width="90" /></td>
                      <td>{item.name}</td>
                      <td>{item.matra}</td>
                      <td>{item.alamat}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center p-4">Data tidak ditemukan</td>
                  </tr>
                )}
              </tbody>
            </table>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DaftarAsosiasi;
