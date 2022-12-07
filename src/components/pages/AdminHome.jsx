import React, { Component } from 'react'
import axios from 'axios';
import styles from '../static/css/adminhome.module.css'

class AdminHome extends Component {
    state = {  } 


    handleSubmit = e => {
      e.preventDefault();
  
      // console.log(user)
  
      axios.post('../AdminLogin/post')
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
          <h1>sajasjka</h1>
        </div>
      </React.Fragment>
    );
  }
}
 
export default AdminHome;