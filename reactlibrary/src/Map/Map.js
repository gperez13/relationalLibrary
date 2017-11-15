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
      <div style={{height: "800px", width: "1000px", padding: "0", margin: "0", float: "both"}}>

        <GoogleMap
        style={style}
     	resetBoundsOnResize = {true}
        bootstrapURLKeys={{
          key: 'AIzaSyAdgdOZrv0EWt8EmgY6c_g98zIX9JBULS8',
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