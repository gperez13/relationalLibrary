import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

class Mapp extends Component {
  constructor() {
    super();
    this.state = {
      center: {lat: 41.8781, lng: -87.6298},
      zoom: 10
    
    }
  }

  
  render() {
    const style = {
      width: '400px',
      height: '400px'
    }
    return(
      <div style={{height: "400px", width: "400px"}}>
        <GoogleMap
        style={style}
        bootstrapURLKeys={{
          key: 'AIzaSyBERkSwB1_8brGNdcq4kAH-Jbw5P527Kkc',
          language: 'en'
        }}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}
        >
        </GoogleMap>
      </div>
    )
  }
}

export default Mapp;