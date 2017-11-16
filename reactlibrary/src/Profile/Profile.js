import React, { Component } from 'react';
import './Profile.css'


export class Profile extends Component{



	render(){
		console.log(this.props)



		return(

			<div id="profile">
				<h3>My Books</h3>



				<li>Slaughterhouse Five</li>
				<li>Cat's Cradle</li>
				<li>Bluebeard</li>
				<li>Deadeye Dick</li>
			</div>

			)
	}
}


export default Profile;