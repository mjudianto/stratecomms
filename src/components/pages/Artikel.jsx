import React, { Component } from 'react'
import axios from 'axios';

class Artikel extends Component {
  state = {  } 

  handleSubmit = e => {
    e.preventDefault();

    // console.log(user)

    axios.post('../artikel/post')
      .then(() => console.log('post success'))
      .catch(err => {
        console.error(err);
      });
  };

  render() { 
    return (
      <React.Fragment>
        <h1>Artikel Page</h1> 
        <form method='post' onSubmit={this.handleSubmit}>
          <input type="text" className='m-3'/>
          <button className='btn btn-success'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
 
export default Artikel;