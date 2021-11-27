import React from 'react';
import './App.css';
import {
	About,
	CtaBanner,
	Footer,
	Hero,
	Navbar,
	Pricing,
	Services,
} from './components';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Pricing />
			<CtaBanner />
			<Footer />
		</div>
	);
}

export default App;
