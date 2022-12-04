import React, { Component } from 'react'
import axios from 'axios';
<<<<<<< HEAD
import styles from '../static/css/artikel.module.css'
=======
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../static/css/artikel.module.css';

function importAll(r) {
  let images= {};
  r.keys().map(item => { images[item.replace('../static/images')] = r(item); });
  return images;
}
>>>>>>> 08891b72c0235a7f05650affc2635e5c026f4c7a

class Artikel extends Component {
  state = {  } 

  handleSubmit = e => {
    e.preventDefault();

    // console.log(user)

    axios.post('../artikel/post')
      .then(() => console.log('post success')
      , window.location.href = "/artikel",
      )
      .catch(err => {
        console.error(err);
      });
  };


  render() { 
    
  const images = importAll(require.context('../static/images', false, /\.png$/));
  const imagesJPG = importAll(require.context('../static/images', false, /\.jpg$/));
    return (
      <React.Fragment>
<<<<<<< HEAD
        <h1 className={`${styles.artikelText}`}>Artikel</h1> 
=======
        <div className={styles.jarak}>
          <div class="container">
            <h6 class="fw-bold">Artikel</h6>
            <div className={styles.jarak}>
              <div class="row">
                <div class="col-4">
                  <img src={images['./artikel.png']} />
                </div>
                <div class="col-8 text-start">
                  <h3 class="fw-bold">REFLEKSI STRATECOMMS TAHUN 2021: KEMENTERIAN PEDULI SERTIFIKASI PROFESI DARI BNSP</h3>
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <u>read more</u>
                  <div className={styles.garishr}>31/12/2021, 13:53 WIB</div>
                </div>
              </div>
            </div>

            <div className={styles.jarak}>
              <div class="row">
                <div class="col-4">
                  <img src={images['./artikel.png']} />
                </div>
                <div class="col-8 text-start">
                  <h3 class="fw-bold">REFLEKSI STRATECOMMS TAHUN 2021: KEMENTERIAN PEDULI SERTIFIKASI PROFESI DARI BNSP</h3>
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <u>read more</u>
                  <div className={styles.garishr}>31/12/2021, 13:53 WIB</div>
                </div>
              </div>
            </div>

            <div className={styles.jarak}>
              <div class="row">
                <div class="col-4">
                  <img src={images['./artikel.png']} />
                </div>
                <div class="col-8 text-start">
                  <h3 class="fw-bold">REFLEKSI STRATECOMMS TAHUN 2021: KEMENTERIAN PEDULI SERTIFIKASI PROFESI DARI BNSP</h3>
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <u>read more</u>
                  <div className={styles.garishr}>31/12/2021, 13:53 WIB</div>
                </div>
              </div>
            </div>

          </div> 
        </div>


        {/* <form method='post' onSubmit={this.handleSubmit}>
          <input type="text" className='m-3'/>
          <button className='btn btn-success'>Submit</button>
        </form> */}
>>>>>>> 08891b72c0235a7f05650affc2635e5c026f4c7a
      </React.Fragment>
    );
  }
}
 
export default Artikel;