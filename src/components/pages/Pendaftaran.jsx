import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../static/css/pendaftaran.module.css' 

class Pendaftaran extends Component {
  state = {  } 


  handleSubmit = e => {
    e.preventDefault();

    // console.log(user)

    axios.post('../pendaftaran/post')
      .then(() => console.log('post success')
      , window.location.href = "/pendaftaranberhasil",
      )
      .catch(err => {
        console.error(err);
      });
  };

  render() { 
    return (
      <React.Fragment>
        <div className={styles.bghome}></div>
        <div className={`container-fluid ${styles.body}`}>
            <div class="mb-3 row text-center">
                <h1>Pendaftaran</h1>
            </div>
            <form class="form-horizontal" method='post' onSubmit={this.handleSubmit}>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Nama Lengkap</label>
                        <div className={`col-7 ${styles.column}`}>
                            <input className={`form-control ${styles.size}`}  type="Nama Lengkap" />
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Nomor Telepon (Whatsapp) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input className={`form-control ${styles.size}`} type="Nomor telepon" />
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Scan Pas Foto (3x4) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input className={`form-control ${styles.size}`}  type="file"/>
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Curicculum Vitae (CV) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input className={`form-control ${styles.size}`}  type="file" />
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Scan Ijazah </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input className={`form-control ${styles.size}`}  type="file"/>
                        </div>
                </div>
                <div class="row mb-3">
                    <label className={`control-label col-sm-2 ${styles.variabel}`}>Scan Kartu Tanda Penduduk (KTP) </label>
                    <div className={`col-7 ${styles.column}`}>
                            <input className={`form-control ${styles.size}`}  type="file"/>
                        </div>
                </div>
                <div class="m-3 text-center">
                  <button className={`btn btn-success ${styles.variabel}`}>Submit</button>
                </div>
            </form>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Pendaftaran;