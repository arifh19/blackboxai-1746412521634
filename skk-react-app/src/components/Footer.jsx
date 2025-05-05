import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/foto/logo skk fix.png" alt="Logo SKKNI" />
        </div>
        <div className="footer-info">
          <h3>Alamat</h3>
          <p><b>Sekretariat Komite Standar Kompetensi Kerja Sektor Transportasi dan Logistik</b></p>
          <p>Jl. Medan Merdeka Tim. No.5, RT.2/RW.1, Gambir, Kecamatan Gambir,</p>
          <p>Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110</p>
        </div>
        <div className="footer-info">
          <h3>Kontak Kami</h3>
          <p>Email: komiteskktransportasi@gmail.com</p>
          <p>Telepon: 0821-1469-2102</p>
          <p>Hotline: 0821-1469-2102</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SKKNI. Semua Hak Dilindungi.</p>
      </div>
      <div className="footer-social">
        <a href="https://wa.me/+6282114692102" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        <a href="https://youtube.com/@komiteskktransportasi" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        <a href="https://www.instagram.com/setkomskktranslog" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
