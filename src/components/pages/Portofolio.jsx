import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../static/css/portofolio.module.css';

function importAll(r) {
  let images= {};
  r.keys().map(item => { images[item.replace('../static/images')] = r(item); });
  return images;
}

class Portofolio extends Component {
  state = {  } 

  handleSubmit = e => {
    e.preventDefault();

    // console.log(user)

    axios.post('../portofolio/post')
      .then(() => console.log('post success')
      , window.location.href = "/portofolio",
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
        <div className={styles.jarak}>
          <div class="container">
            <h6 class="fw-bold">Portofolio</h6>
            <div className={styles.jarak}>
              <div class="row">
                <div class="col-4">
                  <img src={images['./artikel.png']} />
                </div>
                <div class="col-8 text-start">
                  <h3 class="fw-bold">REFLEKSI STRATECOMMS TAHUN 2021: KEMENTERIAN PEDULI SERTIFIKASI PROFESI DARI BNSP</h3>
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <a type="button" href="/isiportofolio"><u>read more</u></a>
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
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <a type="button" href="/IsiPortofolio"><u>read more</u></a>
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
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <a type="button" href="/IsiPortofolio"><u>read more</u></a>
                  <div className={styles.garishr}>31/12/2021, 13:53 WIB</div>
                </div>
              </div>
            </div>

          </div> 
        </div>


      </React.Fragment>
    );
  }
}
 
export default Portofolio;