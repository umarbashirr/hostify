import React from 'react';
import './App.css';
import { About, Hero, Navbar, Pricing, Services } from './components';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<About />
			<Services />
			{/* <Pricing /> */}
		</div>
	);
}

export default App;
