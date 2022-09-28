import React, { Component } from 'react'
import axios from 'axios';

class Pendaftaran extends Component {
  state = {  } 

  render() { 
    return (
      <React.Fragment>
        <h1>Pendaftaran Page</h1> 
        <form method='post' onSubmit={this.handleSubmit}>
          <input type="text" className='m-3'/>
          <button className='btn btn-success'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
 
export default Pendaftaran;