import React, { Component } from 'react'
import axios from 'axios';

class Portofolio extends Component {
  state = {  } 

  handleSubmit = e => {
    e.preventDefault();

    // console.log(user)

    axios.post('../portofolio/post')
      .then(() => console.log('post success')
      , window.location.href = "/portofolio",
      )
      .catch(err => {
        console.error(err);
      });
  };

  render() { 
    return (
      <React.Fragment>
        <h1>Portofolio Page</h1> 
        <form method='post' onSubmit={this.handleSubmit}>
          <input type="text" className='m-3'/>
          <button className='btn btn-success'>Submit</button>
        </form>

        <h1>hello</h1>
      </React.Fragment>
    );
  }
}
 
export default Portofolio;