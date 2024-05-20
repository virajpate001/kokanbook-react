import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/component/Header'
import Header2 from './assets/component/Header2'
import Footer from './assets/component/Footer'
import Footer2 from './assets/component/Footer2'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
	const location = useLocation()

	const isResortPage = location.pathname.startsWith('/resort')

	return (
		<>
			{!isResortPage ? <Header /> : null}
			<Outlet />

			{!isResortPage ? <Footer /> : null}
		</>
	)
}

export default App
