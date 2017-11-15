import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Mapp from './Map/Map.js';
import GoogleMapMarkers from 'google-map-react';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



