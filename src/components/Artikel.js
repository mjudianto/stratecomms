import React, { Component } from 'react'

// class Artikel extends Component {
//   state = {  } 
//   render() { 
//     return (
//       <React.Fragment>
//         <h1>Artikel Page</h1>
//       </React.Fragment>
//     );
//   }
// }

function Artikel() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return(
    <h1>Artikel Page</h1>
  )
}
 
export default Artikel;