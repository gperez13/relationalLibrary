import React, { Component } from 'react';

import './Login.css'
import NewUser from '../NewUser/New.js';




export class Login extends Component {







	render() {
		return(
			<div id="login">
				<form >
					Username: <input/><br/>
					Password: <input/><br/>
					<button onClick={this.props.login}>Login</button>

				</form>
				<br/><br/><br/>
				<NewUser />
			</div>
			)
	}
}






export default Login;