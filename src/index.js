import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'
import HomePage from './components/pages/HomePage';
import Artikel from './components/pages/Artikel';
import Pendaftaran from './components/pages/Pendaftaran';
import PendaftaranBerhasil from './components/pages/PendaftaranBerhasil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './components/static/css/index.module.css'
import logo from './components/static/images/logo.png';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import * as jsFunction from './components/static/js/index.js';
import Jadwal from './components/pages/Jadwal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Router>
    <nav class={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbarStyle}`}>
      <div class="container-fluid">
        <a style={{marginLeft: '2vw'}} class="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="160px" height="20px"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          {jsFunction.activeHome()}
          {jsFunction.activeArtikel()}
          {jsFunction.activeJadwalSertifikasi()}
          {jsFunction.activePortofolio()}
          <button className={`btn ${styles.buttonPendaftaran}`}>
            <a className={`nav-link ${styles.aFontStyle}`} style={{fontSize: '10pt'}} href="/Pendaftaran"><b>PENDAFTARAN</b></a>
          </button>
        </div>
      </div>
    </nav>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/> 
      <Route path='/artikel' element={<Artikel/>}/> 
      <Route path='/pendaftaran' element={<Pendaftaran/>}/>
      <Route path='/jadwal' element={<Jadwal/>}/>
      <Route path='/pendaftaranBerhasil' element={<PendaftaranBerhasil/>}/>
    </Routes>
    <footer className={`${styles.footerBody}`}>
      <h1 className={`${styles.footerh1}`}>Kami Dekat Dengan Anda</h1>
      <h4 className={`${styles.footerh4}`}><BsInstagram /> &nbsp; @stratecomms</h4>
      <h4 className={`${styles.footerh4}`}><BsWhatsapp /> &nbsp; 081390601398 (Dr. Muhammad Adi)</h4>
      <h4 className={`${styles.footerh4}`}><MdOutlineEmail /> &nbsp; stratecomms@gmail.com</h4>
      <button className={`${styles.footerButton}`}>HUBUNGI KAMI</button>
    </footer>
  </Router>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
