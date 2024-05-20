import React from 'react'
import { Link } from 'react-router-dom'
import PlaceCard from '../component/PlaceCard'

import { places } from '../data'

function Home() {
	return (
		<>
			<h1>Traveling Places</h1>
			<div>
				{places.map((place) => (
					<div key={place.id}>
						<h2>{place.name}</h2>
						<Link to={`/place/${place.id}`}>View Details</Link>
					</div>
				))}
			</div>
		</>
	)
}

export default Home
