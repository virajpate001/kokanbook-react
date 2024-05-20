import React from 'react'
import { Link } from 'react-router-dom'

function PlaceCard({ place }) {
	return (
		<>
			<h2>{place.name}</h2>

			<Link to={`/place/${place.id}`}>View Details</Link>
		</>
	)
}

export default PlaceCard
