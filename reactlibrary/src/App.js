import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.js';
import Page from './Page/Page.js';

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
    componentDidMount(){
    fetch('https://extracts.panmacmillan.com/getextracts?authorcontains=tony')
    .then(response => response.json())
    .then(data => {
      console.log(data, ' what is data', typeof(data), Array.isArray(data), Array.isArray(data.Extracts))
      const state = this.state;
      state.books = data.Extracts;
      console.log(this, ' this is this', state, ' this is state')
      this.setState(state)
    })
    console.log(this.state)

  }


  login = (e) => {
    const state = this.state;
    state.isLoggedIn = true;
    this.setState(state);
  }
  logout = (e) =>{
    const state = this.state;
    state.isLoggedIn = false;
    this.setState(state);
  }



  render() {
    return (
      <div className="App">

      <br/><br/>
      <h1>Chicago Community Library</h1>
      <br/><br/><br/>


      {this.state.isLoggedIn ?  <Page logout={this.logout} books={this.state.books}/> : <Login login={this.login}/>}

 
       
        
        
        
      </div>
    );
  }
}

export default App;
