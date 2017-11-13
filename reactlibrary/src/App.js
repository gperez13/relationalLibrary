import React, { Component } from 'react';
import './App.css';
import Listings from './AllListings/Listings.js';
import Login from './Login/Login.js';
import Map from './Map/Map.js';
import NewUser from './NewUser/New.js';
import Profile from './Profile/Profile.js';

class App extends Component {

  constructor () {
    super()
    this.state = {
      isLoggedIn: true,
      books: [],
      users: [],
      location: []
    }
  }







  render() {
    return (
      <div className="App">

      <br/><br/>
      <h1>Chicago Community Library</h1>


      {this.state.isLoggedIn ?  <Map /> : <Login />}

 
       
        
        
        
      </div>
    );
  }
}

export default App;
