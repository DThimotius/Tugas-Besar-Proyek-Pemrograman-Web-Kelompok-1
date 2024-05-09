import React from 'react';
import './style.css';

const Home = () => {
  return (
    <section id="home" className="home-section text-center">
      <div className="container">
        <h1 className="display-4 text-light">Selamat Datang di First Impression Lab [Electronics]</h1>
        <p className="lead text-light">Inovasi dan Kualitas untuk Kebutuhan Elektronik Anda</p>

        <div className="hero-image">
          <img
            src="home-product.jpg"
            alt="Produk Elektronik"
            className="img-fluid"
          />
        </div>

        <div className="description">
          <p className="text-light">
            First Impression Lab [Electronics] adalah perusahaan terkemuka dalam bidang elektronik yang berfokus pada inovasi dan kualitas. 
            Kami menyediakan berbagai produk elektronik canggih, mulai dari smartphone hingga perangkat rumah tangga pintar, semuanya dirancang untuk memenuhi kebutuhan konsumen modern. 
            Tim kami terdiri dari para ahli yang berdedikasi untuk memberikan produk terbaik dan layanan pelanggan yang unggul. 
            Dengan teknologi terbaru dan proses produksi yang efisien, kami memastikan setiap produk melewati standar kualitas tertinggi. 
            Kami juga menawarkan garansi dan dukungan teknis yang komprehensif untuk memberikan kepuasan penuh kepada pelanggan. 
            First Impression Lab [Electronics] berkomitmen untuk menjadi mitra yang dapat Anda andalkan untuk semua kebutuhan elektronik Anda.
          </p>
        </div>

        <div className="features">
          <h2 className="text-light">Mengapa Memilih Kami?</h2>
            <table className="features-table">
              <tbody>
                <tr><td><li>Produk berkualitas tinggi dengan teknologi terbaru</li></td></tr>
                <tr><td><li>Layanan pelanggan yang ramah dan responsif</li></td></tr>
                <tr><td><li>Garansi dan dukungan teknis yang komprehensif</li></td></tr>
                <tr><td><li>Pengiriman cepat dan aman</li></td></tr>
              </tbody>
            </table>
        </div>

        <div className="products">
          <h2 className="text-light">Produk Apa Saja yang Kami Sediakan?</h2>
          <table className="product-table">
            <tbody>
              <tr><td><li>Smartphone dan Tablet</li></td></tr>
              <tr><td><li>Laptop dan Komputer Desktop</li></td></tr>
              <tr><td><li>Televisi Cerdas</li></td></tr>
              <tr><td><li>Smartwatch dan Perangkat Wearable</li></td></tr>
              <tr><td><li>Perangkat Audio dan Headphones</li></td></tr>
              <tr><td><li>Perangkat Gaming</li></td></tr>
              <tr><td><li>Peralatan Rumah Tangga Pintar</li></td></tr>
            </tbody>
          </table>
        </div>

        <div className="cta-section">
          <p className="text-light">Ingin tahu lebih lanjut mengenai kami?</p>
          <a href="/product-features"><button className="btn btn-primary">Lihat Produk Kami</button></a>
          <a href="/contact-us"><button className="btn btn-primary">Hubungi Kami</button></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
