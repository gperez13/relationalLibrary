import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.js';
import Mapp from './Map/Map.js';

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


      {this.state.isLoggedIn ?  <Mapp /> : <Login />}

 
       
        
        
        
      </div>
    );
  }
}

export default App;
