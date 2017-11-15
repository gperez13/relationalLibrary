import React, { Component } from 'react';
import Mapp from '../Map/Map.js';
import './Page.css'
import Profile from '../Profile/Profile.js'




class Page extends Component{


	render(){

		return(
			<div>



				<div class="main">

					<Profile />
					<hr/>
					<p>This is going to be a Listings Link</p>


					<Mapp />
				</div>

			</div>
			)
	}



}

















export default Page;