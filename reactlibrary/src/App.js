import React, { Component } from 'react';
import './App.css';
import Listings from './AllListings/Listings.js';
import Login from './Login/Login.js';
import Map from './Map/map.js';
import NewUser from './NewUser/New.js';
import Profile from './Profile/Profile.js';

class App extends Component {

  constructor () {
    super()
    this.state = {
      isLoggedIn: false,
      books: [],
      users: [],
      location: []
    }
  }







  render() {
    return (
      <div className="App">
        'this is working'

        <
      </div>
    );
  }
}

export default App;
