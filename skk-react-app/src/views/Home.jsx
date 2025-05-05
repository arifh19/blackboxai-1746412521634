import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';
import NewsItem from '../components/NewsItem';

const newsData = [
  {
    title: 'LSP Awards 2025',
    image: '/foto/header skk.jpg',
    description: 'LSP Awards Tahun 2025 dilaksanakan pada hari Jumat 28 Febuari 2025 di BP3IP Jakarta,LSP awards Tahun 2025 dengan tema “Empowering Competence, Elevating Transportation Excellence',
    url: 'https://contoh-berita1.com',
  },
  {
    title: 'Rapat Persiapan Revisi PM 7 Tahun 2018 Bersama Asosiasi Matra Laut',
    image: '/foto/berita 1.jpg',
    description: 'Rapat persiapan Revisi PM 7 dilaksanakan pada hari rabu 12 maret 2025 di ruang rapat 1 BPSDMP. Rapat ini dihadiri oleh Sekretaris BPSDMP, Kepala Pusat Pengembangan SDM Perhubungan Laut, Kepala bagian umum, kepala bagian SDM, dan Asosiasi di Matra Laut, pada rapat ini dihadiri oleh narasumber dari BNSP dan Kemenaker',
    url: 'https://contoh-berita2.com',
  },
  {
    title: 'Rapat Mekanisme Penyusunan SKKK',
    image: '/foto/berita 2.jpg',
    description: 'Diskusi seputar kebijakan pengelolaan pelabuhan di Indonesia...',
    url: 'https://contoh-berita3.com',
  },
  {
    title: 'Forum Group Discussion',
    image: '/foto/berita 4.jpg',
    description: 'Diskusi seputar kebijakan pengelolaan pelabuhan di Indonesia...',
    url: 'https://contoh-berita3.com',
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="contact-bar">
          <span>Hubungi Kami: Hotline 📞 082114692102</span>
          <div className="social-icons">
            <a href="https://wa.me/+6282114692102" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            <a href="https://youtube.com/@komiteskktransportasi?si=kZu4h1QTSKw2GOQt" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/setkomskktranslog?igsh=MXI2aXEyazllYmowZQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="slideshow-container">
          <Slideshow />
        </div>

        <header className="header-banner">
          <h2>SELAMAT DATANG DI STANDAR KOMPETENSI KERJA</h2>
        </header>

        <section className="latest-news">
          <h2>BERITA TERKINI</h2>
          <div className="news-container">
            {newsData.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                image={news.image}
                description={news.description}
                url={news.url}
              />
            ))}
          </div>
          <div className="see-all">
            <a href="https://contoh-situs-berita.com" target="_blank" rel="noopener noreferrer" className="btn">LIHAT SEMUA</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
