import React, { Component } from 'react';
import './Map.css';
import Profile from '../Profile/Profile.js';
import Listings from '../AllListings/Listings.js';




export class Map extends Component{

	constructor (){
		super()
		this.state ={
			listingsAvailable: false,
		}
	}



	render(){




		return(

			<div>
				<span>
					<Profile />
						<p>Mapping Image</p>
						<img src="http://www.chicago-l.org/maps/route/maps/1995map.jpg"/>

					<Listings />
				</span>
			</div>

			)
	}
}


export default Map;