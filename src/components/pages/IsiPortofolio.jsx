import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../static/css/isiPortofolio.module.css';

function importAll(r) {
  let images= {};
  r.keys().map(item => { images[item.replace('../static/images')] = r(item); });
  return images;
}

class isiPortofolio extends Component {
  state = {  } 

  handleSubmit = e => {
    e.preventDefault();

    // console.log(user)

    axios.post('../isiPortofolio/post')
      .then(() => console.log('post success')
      , window.location.href = "/isiPortofolio",
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
        <div class="container">
            <div className={styles.jarak}>
                <h5 class="fw-bold">Informasi Artikel</h5>

                <div className={styles.jarak}>
                    <div class="row">
                        <div class="col-sm-2">
                            <p class="text-end">Foto Artikel</p>
                        </div>
                        <div class="col-sm-10">
                            <img class="rounded" src={images['./artikel.png']} />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-2">
                        <p class="text-end">Judul Artikel</p>
                    </div>
                    <div class="col-sm-10">
                        <input type="text" id="fname" name="fname"/>                        
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-2">
                        <p class="text-end">Deskripsi Artikel</p>
                    </div>
                    <div class="col-sm-10">
                        <textarea type="textarea" id="fname" name="fname"/>
                    </div>
                </div>
                
                <div class="text-">
                    <center><a type="button" className={`btn btn-primary ${styles.pendaftaran}`} style={{textDecoration: 'none'}} href="/Pendaftaran">Update</a></center>
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
 
export default isiPortofolio;