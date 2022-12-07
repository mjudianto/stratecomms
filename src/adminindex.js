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
import AdminLogin from './components/pages/AdminLogin';
import AdminHome from './components/pages/AdminHome';


const root = ReactDOM.createRoot(document.getElementById('rootadmin'));
root.render(
  <Router>
    <nav className={`navbar navbar-expand-lg bg-dark ${styles.navbarStyle}`}>
      <div className="container-fluid"> 
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="150px" height="20px"/>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className={`navbar-nav`}>
            {jsFunction.activeHome()}
            {jsFunction.activeArtikel()}
            {jsFunction.activeJadwalSertifikasi()}
            {jsFunction.activePortofolio()}
            <button className={`btn ${styles.buttonPendaftaran}`}>
              <a className={`nav-link ${styles.aFontStyle}`} style={{fontSize: '10pt'}} href="/Pendaftaran"><b>PENDAFTARAN</b></a>
            </button>
          </ul>
        </div>
      </div>
      <h1> HALOOOOOOO</h1>

    </nav>
    <Routes>
      <Route path='/adminHome' element={<AdminHome/>}/>
      <Route path='/adminLogin' element={<AdminLogin/>}/>
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
