import React, { Component } from 'react';
import GoogleMap from 'google-map-react';




 const AnyReactComponent = ({ text }) => <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30>{text}</div>;




class MapMarker extends Component {


  
  render() {
   
    return(


         <AnyReactComponent 
          lat={41.8781}
          lng={-87.6298}
          text={'Kreyser Avrora'}
       	 />

    )
  }
}

export default MapMarker;