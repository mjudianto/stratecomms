import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../static/css/pendaftaran.module.css' 

class PendaftaranBerhasil extends Component {
  state = {  } 

  render() { 
    return (
      <React.Fragment>
        <div className={`container-fluid ${styles.body}`}>
            <div class="mb-3 row text-center">
                <h1>Pendaftaran</h1>
            </div>
            
        </div>
      </React.Fragment>
    );
  }
}
 
export default PendaftaranBerhasil;