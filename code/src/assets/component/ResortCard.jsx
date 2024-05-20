import React from 'react'
import { Link } from 'react-router-dom'

function ResortCard({ resort }) {
	return (
		<>
			<h2>{resort.name}</h2>
			<Link to={`/resort/${resort.id}`}>View More</Link>
		</>
	)
}

export default ResortCard
