import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { places } from '../data.js'
import Header2 from '../component/Header2.jsx'
import Footer2 from '../component/Footer2.jsx'

function Resort() {
	const { resortId } = useParams()
	let resort, place

	for (const p of places) {
		resort = p.resorts.find((r) => r.id === resortId)

		if (resort) {
			place = p

			break
		}
	}

	if (!resort) {
		return <h2>Resort not found</h2>
	}

	return (
		<>
			<Header2 />
			<section
				id="banner"
				style={{ height: '100vh', background: '#f8f8f8' }}
			>
				<h1>{resort.name}</h1>
				<p>{resort.aboutus}</p>
			</section>

			<section id="about" style={{ height: '100vh', background: '#ddd' }}>
				<h1>About Us Section</h1>
			</section>

			<section
				id="contact"
				style={{ height: '100vh', background: '#ccc' }}
			>
				<h1>Contact Us Section</h1>
			</section>
			<Footer2 rname={resort.name} />
		</>
	)
}

export default Resort
