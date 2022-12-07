import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import flyer from '../static/images/jadwal.png';
import styles from '../static/css/index.module.css'
import * as jsFunction from '../static/js/index.js';
import logo from '../static/images/logo.png';
import { Outlet } from "react-router-dom";


class NavbarAdmin extends Component {
    render() { 
        return (
        <React.Fragment>
          <h1>Navbar Admin</h1>
          <Outlet />
        </React.Fragment>
        
    );
  }
}
export default NavbarAdmin;