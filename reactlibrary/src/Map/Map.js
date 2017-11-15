import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Page from '../Page/Page.js'




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
      width: '100%',
      height: '100%',
      // display: 'flex',
      // flex: 1
    }
    return(
      <div style={{height: "400px", width: "400px", padding: "0", margin: "0"}}>

        <GoogleMap
        style={style}
     	resetBoundsOnResize = {true}
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