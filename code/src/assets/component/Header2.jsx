import React from 'react'
import { Link } from 'react-scroll'

const Header2 = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="banner" smooth={true} duration={500}>
							Banner
						</Link>
					</li>
					<li>
						<Link to="about" smooth={true} duration={500}>
							About Us
						</Link>
					</li>
					<li>
						<Link to="contact" smooth={true} duration={500}>
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header2
