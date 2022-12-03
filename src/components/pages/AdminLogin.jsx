import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../static/css/adminlogin.module.css' 
import { SiMicrosoftteams} from 'react-icons/si';

class AdminLogin extends Component {
    state = {  } 


    handleSubmit = e => {
      e.preventDefault();
  
      // console.log(user)
  
      axios.post('../AdminHome/post')
        .then(() => console.log('post success')
        , window.location.href = "/AdminHome",
        )
        .catch(err => {
          console.error(err);
        });
    }; 

  render() { 
    return (
      <React.Fragment>
        <div className={styles.bghome}>
          <div className={`container-fluid ${styles.body}`}>
                  <h1>LOGIN ADMIN</h1>
              <form class="form-horizontal" method='post' onSubmit={this.handleSubmit}>
                  <div className={`mb-3`}>
                      <label className={`control-label `}>Username / Email : </label>
                          <div className={`col-7 ${styles.fillColumn}`}>
                              <input className={`form-control`}  type="Username/Email" />
                          </div>
                  </div>
                  <div className={`mb-3 ${styles.centerRow}`}>
                      <label className={`control-label col-sm-2`}>Password : </label>
                      <div className={`col-7 ${styles.fillColumn}`}>
                              <input className={`form-control`} type="Password" />
                          </div>
                  </div>
              </form>
              <div class="d-grid gap-2 col-6">
                  <button className={`btn btn-primary ${styles.loginColumn}`}><a style={{textDecoration: 'none', fontSize: '14pt'}} href="/AdminHome"><b>LOGIN</b></a></button>
                  </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default AdminLogin;