import React, {useState} from 'react';
import './style.css';

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formState;
    if (name && email && message) {
      window.alert("Pesan berhasil terkirim! Terima kasih telah menghubungi kami.");
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } else {
      window.alert("Mohon isi semua kolom sebelum mengirim pesan.");
    }
  };
  
  return (
    <section id="contact" className="contact-section text-center">
      <div className="container">
        <h1 className="section-title">Hubungi Kami</h1>
        <p className="lead">Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami melalui formulir di bawah ini atau menggunakan informasi kontak yang tersedia.</p>

        {/* Formulir Kontak Yeb*/}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input
                type="text" id="name" className="form-control" 
                placeholder="Nama Anda" value={formState.name} onChange={handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email" id="email" className="form-control"
                placeholder="Alamat Email Anda" value={formState.email} onChange={handleInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message" className="form-control" rows="5"
                placeholder="Pesan Anda" value={formState.message} onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Kirim</button>
          </form>
        </div>


        {/* Informasi Kontak Yeb*/}
        <div className="contact-info">
          <h3>Informasi Kontak</h3>
          <p>Alamat: Jl. W.R Supratman, Kandang Limun, Bengkulu, Indonesia</p>
          <p>Telepon: (012) 345-6789</p>
          <p>Email: filelectronics@hotmail.com</p>
        </div>

        {/* Peta Lokasi */}
        <div className="map">
          <h3>Lokasi Kami</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050.740429004889!2d102.2747779!3d-3.7599927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b1c052655ee9%3A0xce43f557afe8b6c9!2sGerbang%20Masuk%20Unib%20Belakang%20(67RF%2B2W2)!5e0!3m2!1sen!2sid!4v1636183225828!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Media Sosial Yeb*/}
        <div className="social-media">
          <h3>Ikuti Kami</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook.png" alt="Facebook" className="img-fluid"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="x.png" alt="Twitter" className="img-fluid"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram.png" alt="Instagram" className="img-fluid"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
