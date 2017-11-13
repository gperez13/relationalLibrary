import React, { Component } from 'react';

import './Login.css'
import NewUser from '../NewUser/New.js';




export class Login extends Component {







	render() {
		return(
			<div >
				<form >
					Username: <input/><br/>
					Password: <input/><br/>
					<button>Login</button>

				</form>

				<NewUser />
			</div>
			)
	}
}






export default Login;