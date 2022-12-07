import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../static/css/artikel.module.css';

function importAll(r) {
  let images= {};
  r.keys().map(item => { images[item.replace('../static/images')] = r(item); });
  return images;
}

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
=======
        <form action="">
          <input type="text" name='testing' />
          <button type='submit' ></button>
        </form>
>>>>>>> 900c4545a1f70e15e3a158839f3490102e12ecf9
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
<<<<<<< HEAD
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <a href='/IsiArtikel'><u>read more</u></a>
=======
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <a type="button" href="#"><u>read more</u></a>
>>>>>>> 900c4545a1f70e15e3a158839f3490102e12ecf9
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
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <a type="button" href="#"><u>read more</u></a>
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
                  Perkembangan sertifikasi profesi Public Relations (PR) dari Badan Nasional Sertifikasi Profesi (BNSP) sudah disadari oleh banyak kalangan masyarakat. Hal ini terlihat dari para peserta dengan berlatar belakang pekerjaan yang beragam. Namun mereka tidak hanya mengetahui dan mencari sertifikasi profesinya saja .... <a type="button" href="#"><u>read more</u></a>
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
      </React.Fragment>
    );
  }
}
 
export default Artikel;