import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../static/css/homepage.module.css';
// import Logo from '../static/images/logo.png';
// import Leader from '../static/images/pimpinan.jpg';
// import * as images from '../static/images';

function importAll(r) {
  let images= {};
  r.keys().map(item => { images[item.replace('../static/images')] = r(item); });
  return images;
}



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

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const images = importAll(require.context('../static/images', false, /\.png$/));
    const imagesJPG = importAll(require.context('../static/images', false, /\.jpg$/));

    console.log(images);
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
                <h4>Selamat datang di <img src={images['./logo.png']} className={styles.imgLogo} /></h4>
                <p><img src={images['./logo.png']} className={styles.imgTxtLogo}/> adalah Lembaga Pelatihan Keahlian yang membimbing calon peserta uji kompetisi PR (Public Relations)
                  untuk melaksanakan sertifikasi profesi PR dari Badan Nasional Sertifikasi Profesi.
                </p>
                <center><a type="button" className={`btn btn-primary ${styles.pendaftaran}`} style={{textDecoration: 'none'}} href="/Pendaftaran">PENDAFTARAN</a></center>
            </div>
          </div>
        </div>

        <div className={styles.enter}>
          <div class="container">
            <h4 className={styles.enter}>Apa itu <img src={images['./logo.png']} className={styles.imgLogo}/>?</h4>
            <p> <img src={images['./logo.png']} className={styles.imgTxtLogo}/> adalah lembaga yang mempersiapkan para calon peserta uji kompetensi PR (Public Relations) sebelum melaksanakan
              uji kompetensi dari Lembaga Sertifikasi Profesi Public Relations Indonesia (LSP PRI) atas nama Badan Nasional 
              Sertifikasi Profesi (BNSP). <img src={images['./logo.png']} className={styles.imgTxtLogo}/> mendaftarkan para calon peserta pada 
              LSP PRI untuk mengikuti uji kompetensi PR.
            </p>

            
            <h4 className={styles.enter} >Pimpinan <img src={images['./logo.png']} className={styles.imgLogo}/></h4>
            <img src={imagesJPG['./pimpinan.jpg']} style={{marginTop:'2%'}} class="rounded mx-auto d-block" width="70%" height="40%"/>
            <p style={{marginBottom:'2%'}}>Dr. Muhammad Adi Pribadi S.E.,M.IB.,M.Com.,C.PR</p>
            <p>
              Dr. Muhammad Adi Pribadi adalah pimpinan <img src={images['./logo.png']} className={styles.imgTxtLogo}/> yang berperan sebagai pembimbing teknis persiapan sertifikasi profesi kepada calon peserta uji kompetensi. Beliau adalah asesor aktif di LSP PRI
              (Lembaga Sertifikasi Profesi Public Relations Indonesia). Saat ini beliau memiliki sertifikat ASESOR dan Certified Public Relations dari LSP PRI - BNSP.
              Aktifitas lainnya, beliau adalah seorang dosen tetap di Universitas Tarumanagara, yang juga aktif di organisasi Ikatan Doktor Ilmu Komunikasi 
              Universitas Padjajaran (IDIK Unpad) sebagai wakil sekjen.
            </p>
          </div>
        </div>

        <div className={styles.enter}>
          <div class="container">
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .2"
            // transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            >
              <div><img className={styles.imgAds} src={images['./1.png']} /></div>
              <div><img className={styles.imgAds} src={images['./2.png']} /></div>
              <div><img className={styles.imgAds} src={images['./3.png']} /></div>
              <div><img className={styles.imgAds} src={images['./4.png']} /></div>
            </Carousel>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;