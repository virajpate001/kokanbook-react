import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ResortCard from '../component/ResortCard'
import { places } from '../data.js'

function Place() {
	const { placeId } = useParams()
	const place = places.find((p) => p.id === placeId)

	if (!place) {
		return <h2>Place not found</h2>
	}

	return (
		<>
			<h1> {place.name} </h1>
			{place.resorts.map((resort) => (
				<ResortCard key={resort.id} resort={resort} />
			))}
		</>
	)
}

export default Place
