import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faMicrochip, faLeaf, faRocket, faShieldAlt, faWifi } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ProductFeatures = () => {
  return (
    <section id="features" className="features-section text-center">
      <div className="container">
        <h1 className="section-title text-light">Fitur Utama</h1>

        <div className="product-image">
          <img
            src="features-image.jpg"
            alt="Produk Elektronik"
            className="img-fluid"
          />
        </div>

        <p className="text-light">
          Produk kami dilengkapi dengan berbagai fitur canggih yang dirancang untuk meningkatkan pengalaman pengguna dan memberikan nilai tambah. 
          Dari desain modern yang estetis hingga teknologi terbaru yang memastikan kinerja yang cepat dan efisien, produk kami mencerminkan dedikasi kami terhadap inovasi. 
          Selain itu, kami menekankan efisiensi energi untuk mendukung keberlanjutan, keamanan terjamin untuk perlindungan konsumen, dan konektivitas luas untuk kompatibilitas dengan berbagai perangkat. 
          Setiap fitur dirancang dengan hati-hati untuk memenuhi kebutuhan dan harapan pelanggan, memastikan bahwa Anda mendapatkan pengalaman elektronik terbaik.
        </p>

        <div className="row text-light">
          <div className="col-md-4 col-sm-12">
            <FontAwesomeIcon icon={faCubes} size="3x" className="feature-icon" />
            <h3>Desain Modern</h3>
            <p>Produk kami didesain dengan sentuhan modern dan elegan.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <FontAwesomeIcon icon={faMicrochip} size="3x" className="feature-icon" />
            <h3>Teknologi Canggih</h3>
            <p>Teknologi terkini memberikan kinerja terbaik dan pengalaman elektronik yang luar biasa.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <FontAwesomeIcon icon={faLeaf} size="3x" className="feature-icon" />
            <h3>Efisiensi Energi</h3>
            <p>Produk kami dirancang untuk efisiensi energi tinggi.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <FontAwesomeIcon icon={faRocket} size="3x" className="feature-icon" />
            <h3>Performa Tinggi</h3>
            <p>Produk kami menawarkan performa tinggi untuk memenuhi kebutuhan konsumen yang beragam.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" className="feature-icon" />
            <h3>Keamanan Terjamin</h3>
            <p>Keamanan adalah prioritas kami, dengan sistem perlindungan yang canggih.</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <FontAwesomeIcon icon={faWifi} size="3x" className="feature-icon" />
            <h3>Konektivitas Luas</h3>
            <p>Produk kami mendukung berbagai jenis konektivitas, seperti Wi-Fi dan Bluetooth.</p>
          </div>
        </div>

        <div className="product-showcase text-light">
          <h1 className="section-title text-light">Produk Kami</h1>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src="smartphone.png" alt="Smartphone" className="img-fluid" />
              <h3>Smartphone</h3>
              <p>Smartphone berperforma tinggi dengan kamera canggih dan desain modern.</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="laptop.png" alt="Laptop" className="img-fluid" />
              <h3>Laptop</h3>
              <p>Laptop tipis dengan daya tahan baterai yang panjang dan kemampuan multitasking.</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="smartwatch.png" alt="Smartwatch" className="img-fluid" />
              <h3>Smartwatch</h3>
              <p>Jam tangan pintar dengan berbagai fitur kesehatan dan konektivitas yang luas.</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="tv.png" alt="TV" className="img-fluid" />
              <h3>TV</h3>
              <p>Televisi cerdas dengan resolusi tinggi dan fitur konektivitas yang lengkap.</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <img src="headphone.png" alt="Headphones" className="img-fluid" />
              <h3>Headphones</h3>
              <p>Headphones berkualitas tinggi dengan suara yang jernih dan nyaman digunakan.</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <img src="speaker.png" alt="Speaker" className="img-fluid" />
              <h3>Speaker</h3>
              <p>Speaker portabel dengan kualitas suara yang kaya dan dukungan untuk Bluetooth.</p>
            </div>
          </div>
        </div>
        <div className="testimonials text-light">
          <h3>Ulasan Pelanggan</h3>
          <p>"Produk ini benar-benar mengubah hidup saya. Inovatif dan mudah digunakan!"</p>
          <p>"Layanan pelanggan yang hebat dan produk berkualitas tinggi. Sangat direkomendasikan!"</p>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
