import React, { Component } from 'react';
import GoogleMap from 'google-map-react';




 const AnyReactComponent = ({ text }) => <div>{text}</div>;




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