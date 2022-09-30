import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './components/pages/HomePage';
import Artikel from './components/pages/Artikel';
import Pendaftaran from './components/pages/Pendaftaran';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './components/static/css/index.module.css'
import logo from './components/static/images/logo.png';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function activeHome(){
  let home = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{textAlign: 'right', paddingRight: '12%'}} aria-current="page" href="/" >Home</a></li>;

  if (window.location.href == 'http://localhost:3000/'){
    home = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{textAlign: 'right', paddingRight: '12%'}} aria-current="page" href="/" >Home</a></li>
    return home;
  } else {
    return home;
  }
}

function activeArtikel(){
  let artikel = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} href="/artikel">Artikel</a></li>;

  if (window.location.href == 'http://localhost:3000/artikel'){
    artikel = artikel = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} href="/artikel">Artikel</a></li>;
    return artikel;
  } else {
    return artikel;
  }
}

function activeJadwalSertifikasi (){
  let jadwalSertifikasi = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{width: '10vw'}} href="#">Jadwal Sertifikasi</a></li>;

  if (window.location.href == 'http://localhost:3000/jadwalsertifikasi'){
    jadwalSertifikasi = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} href="#">Jadwal Sertifikasi</a></li>;
    return jadwalSertifikasi;
  } else {
    return jadwalSertifikasi;
  }
}

function activePortofolio (){
  let portofolio = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle}`} style={{paddingLeft: '20%'}} href="#">Portofolio</a></li>;

  if (window.location.href == 'http://localhost:3000/portofolio'){
    portofolio = <li className="nav-item">
    <a className={`nav-link ${styles.aFontStyle} ${styles.navbarActive}`} style={{paddingLeft: '20%'}} href="#">Portofolio</a></li>;
    return portofolio;
  } else {
    return portofolio;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Router>
    <nav className={`navbar navbar-expand-lg bg-dark ${styles.navbarStyle}`}>
      <div className="container-fluid"> 
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="270px" height="35px"/>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={`navbar-nav`}>
            {activeHome()}
            {activeArtikel()}
            {activeJadwalSertifikasi()}
            {activePortofolio()}
            <button className={`btn ${styles.buttonPendaftaran}`}>
              <a className={`nav-link ${styles.aFontStyle}`} href="/Pendaftaran">Pendaftaran</a>
            </button>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/> 
      <Route path='/artikel' element={<Artikel/>}/> 
      <Route path='/pendaftaran' element={<Pendaftaran/>}/>
    </Routes>
    <footer className={`${styles.footerBody}`}>
      <h1 className={`${styles.footerh1}`}>Kami Dekat Dengan Anda</h1>
      <h4 className={`${styles.footerh4}`}><BsInstagram /> &nbsp; Instagram</h4>
      <h4 className={`${styles.footerh4}`}><BsWhatsapp /> &nbsp; 081390601398 (Adi)</h4>
      <h4 className={`${styles.footerh4}`}><MdOutlineEmail /> &nbsp; stratecomms@gmail.com</h4>
      <button className={`${styles.footerButton}`}>HUBUNGI KAMI</button>
    </footer>
  </Router>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
