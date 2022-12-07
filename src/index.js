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
import Portofolio from './components/pages/Portofolio';
import IsiPortofolio from './components/pages/IsiPortofolio';
import PendaftaranBerhasil from './components/pages/PendaftaranBerhasil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './components/static/css/index.module.css'
import logo from './components/static/images/logo.png';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import * as jsFunction from './components/static/js/index.js';
import Jadwal from './components/pages/Jadwal';
import IsiArtikel from './components/pages/IsiArtikel';
import AdminLogin from './components/pages/AdminLogin';
import AdminHome from './components/pages/AdminHome';
import Navbar from './components/pages/Navbar';
import NavbarAdmin from './components/pages/NavbarAdmin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Router>
    {/* <Routes path='/'element={<Navbar/>}>
      <Route path='home' element={<HomePage/>}/> 
      <Route path='artikel' element={<Artikel/>}/> 
      <Route path='pendaftaran' element={<Pendaftaran/>}/>
      <Route path='jadwal' element={<Jadwal/>}/>
      <Route path='pendaftaranBerhasil' element={<PendaftaranBerhasil/>}/>
      <Route path='adminHome' element={<AdminHome/>}/>
      <Route path='adminLogin' element={<AdminLogin/>}/>
    </Routes> */}
    {/* <Navbar/> */}
    <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route path='home' element={<HomePage/>}/> 
            <Route path='artikel' element={<Artikel/>}/> 
            <Route path='pendaftaran' element={<Pendaftaran/>}/>
            <Route path='jadwal' element={<Jadwal/>}/>
            <Route path='pendaftaranBerhasil' element={<PendaftaranBerhasil/>}/>
          </Route>
          <Route path='/admin' element={<NavbarAdmin/>}>
            <Route path='adminHome' element={<AdminHome/>}/>
            <Route path='adminLogin' element={<AdminLogin/>}/>
          </Route>
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
