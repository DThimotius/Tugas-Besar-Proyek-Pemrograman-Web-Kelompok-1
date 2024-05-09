import React from 'react';
import './style.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section text-center text-light">
      <div className="container">
        <h1 className="section-title">Tentang Kami</h1>
        <img src="logo.png"/>
        <p className="lead">
          First Impression Lab [Electronics] adalah perusahaan teknologi terkemuka yang menawarkan produk elektronik berkualitas tinggi untuk rumah dan bisnis. Kami berdedikasi untuk memberikan inovasi dan keandalan kepada pelanggan kami.
        </p>

        <div className="content">
          <div>
            <h3>Sejarah Kami</h3>
            <p>
              Didirikan pada tahun 2004, kami telah berkembang menjadi salah satu perusahaan elektronik paling inovatif di dunia. Dengan komitmen untuk terus berkembang, kami selalu berada di garis depan teknologi.
            </p>
          </div>
          <div>
            <h3>Misi dan Visi</h3>
            <p>
              Misi kami adalah untuk menciptakan produk elektronik yang memberikan pengalaman yang lebih baik bagi pelanggan kami. Visi kami adalah menjadi pemimpin global dalam teknologi elektronik yang berkelanjutan.
            </p>
          </div>
          <div>
            <h3>Nilai-nilai Kami</h3>
            <ul className="list-unstyled">
              <li>✔️ Inovasi berkelanjutan</li>
              <li>✔️ Pelanggan adalah prioritas</li>
              <li>✔️ Keberlanjutan dan ramah lingkungan</li>
              <li>✔️ Kualitas dan Keandalan</li>
              <li>✔️ Transparansi dan Kejujuran</li>
              <li>✔️ Kolaborasi dan Tim yang Kuat</li>
              <li>✔️ Inklusi dan Keragaman</li>
            </ul>
          </div>
          <div>
            <h3>Tim Kami</h3>
            <p>
              Tim kami terdiri dari para ahli teknologi, desainer, dan profesional yang berdedikasi untuk memberikan yang terbaik kepada pelanggan kami.
            </p>
            <div className="team-photos">
              <img
                src="blank-team.png"
                alt="Tim 1"
                className="team-photo img-fluid"
              />
              <img
                src="blank-team.png"
                alt="Tim 2"
                className="team-photo img-fluid"
              />
              <img
                src="blank-team.png"
                alt="Tim 3"
                className="team-photo img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
