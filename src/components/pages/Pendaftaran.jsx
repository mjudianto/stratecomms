import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../static/css/index.module.css' 

class Pendaftaran extends Component {
  state = {  } 

  render() { 
    return (
      <React.Fragment>
        <div className={`container-fluid ${styles.borderline}`}>
            <div class="mb-3 row text-center">
                <h1>Pendaftaran</h1>
                
            </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Pendaftaran;