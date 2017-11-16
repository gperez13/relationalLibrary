import React, { Component } from 'react';
import Mapp from '../Map/Map.js';
import './Page.css'
import Profile from '../Profile/Profile.js'




class Page extends Component{


	render(){

		console.log(Array.isArray(this.props.books), ' tjis', this.props.books[0])

		return(


				<div  className="container" id="main" >
					<div className="row">
						<div className="col-md-4">
							<Profile />
							<hr/>
							<button onClick={this.props.logout}>Logout</button>
						</div>

						<div className="col-md-8">
							<Mapp books={this.props}/>
						</div>
					</div>
				</div>


			)
	}



}

















export default Page;