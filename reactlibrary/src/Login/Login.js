import React, { Component } from 'react';

import './Login.css'
import NewUser from '../NewUser/New.js';




export class Login extends Component {

	constructor(){
		super()
		this.state = {
			username: '',
			password: ''
		}
	}


	handleSubmit = (e) => {
		e.preventDefault();
		const state = this.state;


		this.setState(state)
	}



	inputSelect = (e) => {
		console.log('this is working')
	}



	render() {
		return(
			<div id="login">
				<form onSubmit={this.handleSubmit}>
					Username: <input/><br/>
					Password: <input type="password"/><br/>
					<button onClick={this.props.login}>Login</button>

				</form>
				<br/><br/><br/>
				<NewUser />
			</div>
			)
	}
}






export default Login;