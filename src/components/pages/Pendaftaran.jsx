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
        <div className={styles.bghome}>
          <div className={`container-fluid ${styles.body}`}>
              <div class="mb-3 row text-center">
                  <h1>Pendaftaran</h1>
              </div>
              <form class="form-horizontal" method='post' onSubmit={this.handleSubmit}>
                  <div className={`row mb-3 ${styles.centerRow}`}>
                      <label className={`control-label col-sm-2 ${styles.variabel}`}>Nama Lengkap</label>
                          <div className={`col-7 ${styles.column}`}>
                              <input className={`form-control ${styles.size}`}  type="Nama Lengkap" />
                          </div>
                  </div>
                  <div className={`row mb-3 ${styles.centerRow}`}>
                      <label className={`control-label col-sm-2 ${styles.variabel}`}>Nomor Telepon (Whatsapp) </label>
                      <div className={`col-7 ${styles.column}`}>
                              <input className={`form-control ${styles.size}`} type="Nomor telepon" />
                          </div>
                  </div>
                  <div className={`row mb-3 ${styles.centerRow}`}>
                      <label className={`control-label col-sm-2 ${styles.variabel}`}>Pas Foto (3x4) </label>
                      <div className={`col-7 ${styles.column}`}>
                              <input className={`form-control ${styles.size}`}  type="file"/>
                          </div>
                  </div>
                  <div className={`row mb-3 ${styles.centerRow}`}>
                      <label className={`control-label col-sm-2 ${styles.variabel}`}>Curicculum Vitae (CV) </label>
                      <div className={`col-7 ${styles.column}`}>
                              <input className={`form-control ${styles.size}`}  type="file" />
                          </div>
                  </div>
                  <div className={`row mb-3 ${styles.centerRow}`}>
                      <label className={`control-label col-sm-2 ${styles.variabel}`}>Ijazah Terakhir </label>
                      <div className={`col-7 ${styles.column}`}>
                              <input className={`form-control ${styles.size}`}  type="file"/>
                          </div>
                  </div>
                  <div className={`row mb-3 ${styles.centerRow}`}>
                      <label className={`control-label col-sm-2 ${styles.variabel}`}>Kartu Tanda Penduduk (KTP) </label>
                      <div className={`col-7 ${styles.column}`}>
                              <input className={`form-control ${styles.size}`}  type="file"/>
                          </div>
                  </div>
                  <div class="m-3 text-center">
                  <center><button className={`btn ${styles.pendaftaran}`}><a style={{textDecoration: 'none', fontSize: '10pt'}} href="/Pendaftaran"><b>SUBMIT</b></a></button></center>
                  </div>
              </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Pendaftaran;