import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HubungiKami = () => {
  return (
    <>
      <Navbar />
      <div className="container" style={{ maxWidth: '900px', margin: 'auto', padding: '20px' }}>
        <h2>Hubungi Kami</h2>
        <div className="info" style={{ marginBottom: '20px' }}>
          <p><strong>Alamat:</strong> Jl. Medan Merdeka Tim. No.5, RT.2/RW.1, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110</p>
          <p><strong>Phone:</strong> 082114692102 </p>
          <p><strong>Hotline:</strong> -</p>
          <p><strong>Email:</strong> <a href="mailto:komiteskktransportasi@gmail.com">komiteskktransportasi@gmail.com</a></p>
        </div>

        <div className="map-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.670048208979!2d106.82899847355364!3d-6.174908960505927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cd2eb98143%3A0x6a7bf1137d3670d8!2sBPSDM%20Kemenhub!5e0!3m2!1sid!2sid!4v1742448387953!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BPSDM Kemenhub Location"
          ></iframe>

          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1742448548124!6m8!1m7!1s4g6geieWNGupKpmdq6FlpA!2m2!1d-6.175365560901486!2d106.8306766207555!3f62.74524!4f0!5f0.7820865974627469"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BPSDM Kemenhub Street View"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HubungiKami;
