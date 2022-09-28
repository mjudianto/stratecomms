import React, { Component } from 'react';
import axios from 'axios';
import styles from '../static/css/homepage.module.css';

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
        <div class="container" className={styles.bghome}>
          <div class="col">
            <div class="col text-center" className={styles.ads}>
              Ads
            </div>
            <div class="col-6">
              <h1>Selamat datang di Stratecomms</h1>
              <p>Stratecomms adalah Lembaga Pelatihan Keahlian yang membimbing calon peserta uji kompetisi PR (Public Relations)
                untuk melaksanakan sertifikasi profesi PR dari Badan Nasional Sertifikasi Profesi
              </p>
              <button>Pendaftaran</button>
            </div>
            <div class="col text-center">
              Ads
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;