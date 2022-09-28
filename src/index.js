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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <Router>
    <nav className={`navbar navbar-expand-lg bg-dark ${styles.navbarStyle}`}>
      <div className="container-fluid"> 
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="200px" height="30px"/>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/artikel">Artikel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Jadwal Sertifikasi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portofolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pendaftaran</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/> 
      <Route path='/artikel' element={<Artikel/>}/> 
      <Route path='/pendaftaran' element={<Pendaftaran/>}/>
    </Routes>
  </Router>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
