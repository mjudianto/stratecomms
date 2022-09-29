import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../static/css/pendaftaran.module.css' 

class Pendaftaran extends Component {
  state = {  } 

  render() { 
    return (
      <React.Fragment>
        <div className={`container-fluid ${styles.body}`}>
            <div class="mb-3 row text-center">
                <h1>Pendaftaran</h1>
            </div>
            <form class="form-horizontal">
                <div class="row mb-3">
                    <label class="control-label col-sm-2">Nama Lengkap</label>
                        <div className={`col sm-6 ${styles.column}`}>
                            <input class="form-control" type="Nama Lengkap" />
                        </div>
                </div>
                <div class="row mb-3">
                    <label class="control-label col-sm-2">Nomor Telepon (Whatsapp) </label>
                    <div className={`col sm-6 ${styles.column}`}>
                            <input class="form-control" type="Nomor telepon" />
                        </div>
                </div>
            </form>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Pendaftaran;