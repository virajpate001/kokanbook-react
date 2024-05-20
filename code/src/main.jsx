import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link
} from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import Place from './assets/pages/Place.jsx'
import Resort from './assets/pages/Resort.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/place/:placeId',
				element: <Place />
			},
			{
				path: '/resort/:resortId',
				element: <Resort />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
