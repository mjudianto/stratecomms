import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import flyer from '../static/images/jadwal.png';
import styles from '../static/css/index.module.css'
import * as jsFunction from '../static/js/index.js';
import logo from '../static/images/logo.png';
import { Outlet } from "react-router-dom";


class Navbar extends Component {
    render() { 
        return (
        <React.Fragment>
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
          </nav>
          <Outlet />
        </React.Fragment>
        
    );
  }
}
export default Navbar;