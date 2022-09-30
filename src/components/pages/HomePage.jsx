import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../static/css/homepage.module.css';
import Logo from '../static/images/logo.png';
import Leader from '../static/images/pimpinan.jpg';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }
    
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    const user = {
      username
    };

    axios.post('../../post', user)
      .then(() => console.log('User Created')
      , window.location.href = "/artikel",
      )
      .catch(err => {
        console.error(err);
      });
  };

  render() { 
    const labelStyle = {
      margin: '10px',
    };

    return (
      <React.Fragment>
        {/* <h1 style={{margin: "10px"}}>HomePage</h1>
        <form method="post" className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="" style={labelStyle}>Username : </label>
          <input type="text" name="username" className='m-3' onChange={this.handleInputChange}/>
          <button type="submit" className='btn btn-primary'>Submit</button> 
        </form> */}
        <div className={styles.bghome}> 
          <div class="container">
            <div class="row" className={styles.jarak}>
                <h4>Selamat datang di <img src={Logo} style={{marginBottom:'0.5%'}} width="260vw" height="33vh"/></h4>
                <p><img src={Logo} style={{marginBottom:'0.4%'}} width="125vw" height="16vh"/> adalah Lembaga Pelatihan Keahlian yang membimbing calon peserta uji kompetisi PR (Public Relations)
                  untuk melaksanakan sertifikasi profesi PR dari Badan Nasional Sertifikasi Profesi.
                </p>
                <center><button className={styles.pendaftaran}>PENDAFTARAN</button></center>
            </div>
          </div>
        </div>

        <div className={styles.enter}>
          <div class="container">
            <h4 className={styles.enter}>Apa itu <img src={Logo} style={{marginBottom:'0.5%'}} width="260vw" height="33vh"/> ?</h4>
            <p> <img src={Logo} style={{marginBottom:'0.3%'}} width="120vw" height="15vh"/> adalah lembaga yang mempersiapkan para calon peserta uji kompetensi PR (Public Relations) sebelum melaksanakan
              uji kompetensi dari Lembaga Sertifikasi Profesi Public Relations Indonesia (LSP PRI) atas nama Badan Nasional 
              Sertifikasi Profesi (BNSP). <img src={Logo} style={{marginBottom:'0.3%'}} width="120vw" height="15vh"/> mendaftarkan para calon peserta pada 
              LSP PRI untuk mengikuti uji kompetensi PR.
            </p>

            
            <h4 className={styles.enter} >Pimpinan <img src={Logo} style={{marginBottom:'0.5%'}} width="260vw" height="33vh"/></h4>
            <img src={Leader} style={{marginTop:'2%'}} class="rounded mx-auto d-block"width="700vw" height="400vh"/>
            <p style={{marginBottom:'2%'}}>Dr. Muhammad Adi Pribadi S.E.,M.IB.,M.Com.,C.PR</p>
            <p>
              Dr. Muhammad Adi Pribadi adalah pimpinan <img src={Logo} style={{marginBottom:'0.3%'}} width="120vw" height="15vh"/> yang berperan sebagai pembimbing teknis persiapan sertifikasi profesi kepada calon peserta uji kompetensi. Beliau adalah asesor aktif di LSP PRI
              (Lembaga Sertifikasi Profesi Public Relations Indonesia). Saat ini beliau memiliki sertifikat ASESOR dan Certified Public Relations dari LSP PRI - BNSP.
              Aktifitas lainnya, beliau adalah seorang dosen tetap di Universitas Tarumanagara, yang juga aktif di organisasi Ikatan Doktor Ilmu Komunikasi 
              Universitas Padjajaran (IDIK Unpad) sebagai wakil sekjen.
            </p>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;