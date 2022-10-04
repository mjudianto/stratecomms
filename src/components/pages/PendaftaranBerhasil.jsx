import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../static/css/pendaftaranBerhasil.module.css' 
import { SiMicrosoftteams} from 'react-icons/si';

class PendaftaranBerhasil extends Component {
  state = {  } 

  render() { 
    return (
      <React.Fragment>
        <div className={styles.bghome}>
          <div className={`container-fluid ${styles.messageContainer}`}>
            <h1>Pendaftaran Berhasil!</h1>
            <p className={`${styles.confirmationText}`} >Pendaftaran Anda berhasil. Silahkan klik icon di bawah ini untuk join teams di Microsoft Teams.</p>
            <h4><SiMicrosoftteams/></h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default PendaftaranBerhasil;