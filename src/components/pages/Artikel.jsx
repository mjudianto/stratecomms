import React, { Component } from 'react'
import axios from 'axios';
import styles from '../static/css/artikel.module.css'

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
    return (
      <React.Fragment>
        <h1 className={`${styles.artikelText}`}>Artikel</h1> 
      </React.Fragment>
    );
  }
}
 
export default Artikel;