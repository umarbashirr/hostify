import React, { useState } from 'react';
import './App.css';
import {
	About,
	CtaBanner,
	Footer,
	Hero,
	Navbar,
	Sidebar,
	Pricing,
	Services,
} from './components';

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className='App'>
			<Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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
