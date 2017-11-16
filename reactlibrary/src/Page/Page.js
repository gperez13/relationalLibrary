import React, { Component } from 'react';
import Mapp from '../Map/Map.js';
import './Page.css'
import Profile from '../Profile/Profile.js'




class Page extends Component{


	render(){

		return(


				<div  class="container" id="main" >
					<div class="row">
						<div class="col-md-4">
							<Profile />
							<hr/>
							<button onClick={this.props.logout}>Logout</button>
						</div>

						<div class="col-md-8">
							<Mapp books={this.props}/>
						</div>
					</div>
				</div>


			)
	}



}

















export default Page;