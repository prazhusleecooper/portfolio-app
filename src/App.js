import React from 'react';

// ? Components
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import SkillSet from './Components/SkillSet';
import Contact from './Components/Contact';

// ? SCSS
import './App.scss';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<Navbar />
			<AboutMe />
			<SkillSet />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
