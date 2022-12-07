import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import flyer from '../static/images/jadwal.png';
import styles from '../static/css/jadwal.module.css';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>;
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>;
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>;

class Jadwal extends Component {
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
        return (
          <React.Fragment>
        <div class='container'>
            <div class='row'>
                <b className={styles.judulbesar}>Jadwal Sertifikasi</b>
                
            </div>
            <div class='row'>
                <div class='col-3'>
                <button className={styles.event}><b style={{fontSize: '15px', padding: '7px'}}> Upcoming Event </b></button>
                </div>
            </div>
            <div class='row'>
                <div class='col-sm-5'>
                    <img className={styles.flyer} src={flyer} alt={flyer} />
                </div>
                <div class='col-sm-7' >
                <div className={styles.jrk}>
                    <div className={styles.isi}>
                    <div className='row' style={{marginBottom: '20px'}}>
                        <b className={styles.juduljadwal} >Sertifikasi Profesi Public Relations</b></div>
                    <div className='row' style={{fontSize: '24px', marginBottom: '10px'}}>
                        <b className={styles.subjuduljadwal} >Workshop</b></div>
                    <div className='row' style={{marginBottom: '20px'}}>
                        <b className={styles.jadwal} >Selasa, 6 September 2022</b></div>
                    <div className='row' style={{fontSize: '24px', marginBottom: '10px'}}>
                        <b className={styles.subjuduljadwal}>Uji Kompetensi</b></div>
                    <div className='row' style={{marginBottom: '40px'}}>
                        <b className={styles.jadwal} >Sabtu, 10 September 2022</b></div>
                    <div className='row' style={{fontSize: '24px', marginBottom: '10px'}}>
                        <b className={styles.subjuduljadwal} >Syarat Pendaftaran</b></div>
                    <div className='row' style={{marginBottom: '40px'}}>
                    <ul>
                        <li className={styles.jadwal} >1 Foto cetak 3x4 sebanyak 5 lembar</li>
                        <li className={styles.jadwal} >Curriculum Vitae (CV)</li>
                        <li className={styles.jadwal} >Scan Ijazah pendidikan terakhir</li>
                        <li className={styles.jadwal} >Scan Kartu Tanda Penduduk (KTP)</li>
                    </ul>
                    </div>
                    <button className={styles.daftar} ><a style={{textDecoration: 'none', fontSize: '20pt'}} href="/Pendaftaran"><b>Daftar</b></a></button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        </React.Fragment>
    );
  }
}
export default Jadwal;