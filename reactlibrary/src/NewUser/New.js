import React, { Component } from 'react';



export class NewUser extends Component{



	render(){




		return(

			<div id="new">
				<form>
					<p>New User Form</p>
					Username: <input /><br/>
					Password: <input /><br/>
					<button>Picture Upload</button>
					<button onClick={this.props.login}>Submit</button>
					
				</form>
			</div>

			)
	}
}


export default NewUser;