import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Page from '../Page/Page.js'





  const createMapOptions = (maps) =>{
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
    }
  }







class Mapp extends Component {
  constructor() {
    super();
    this.state = {
      center: {lat: 41.8781, lng: -87.6298},
      zoom: 15,

    
    }
  }

renderMarkers = (map, maps) => {
  const marker = new maps.Marker({        
    position: {lat: 41.8781, lng: -87.6298},
    map,
      });
}

  
  render() {
    const style = {
      width: '100%',
      height: '100%',
      // display: 'flex',
      // flex: 1
    }
const MARKER_SIZE = 40;
const greatPlaceStyle = {
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE / 2
}



console.log(this.props.books.books[0])

const booksAvailable = this.props.books.books.map((book, i)=>{
  return <div key={i}>
          <li>{book.title}</li>
          </div>
})

  const AnyReactComponent = ({ text }) => <div id="map-marker" style={{
    position: 'relative', color: '#B10DC9', background: '#DDDDDD',
    height: 200, width: 120, top: -20, left: -30, border: "1px solid black", "border-radius": "7px", padding: "5px",    
  }}>{booksAvailable}</div>;

    return(
      <div style={{height: "800px", width: "100%", padding: "0", margin: "0", float: "both",  border: "1px solid black", "border-radius": "7px"}}>

        <GoogleMap
        options={createMapOptions}
        style={style}
      	resetBoundsOnResize = {true}
        bootstrapURLKeys={{
          key: 'AIzaSyAdgdOZrv0EWt8EmgY6c_g98zIX9JBULS8',
          language: 'en'
        }}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}

        >



         <AnyReactComponent 
          lat={41.8833}
          lng={-87.6258}
         

        />

   

        </GoogleMap>
      </div>
    )
  }
}

export default Mapp;