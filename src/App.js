import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/sections/Home';
import Portfolio from './components/sections/Portfolio';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';

function App() {
  const navItems= [
    {id: 'home', name: 'Home', href: '#home'},
    {id: 'portfolio', name: 'Portfolio', href: '#portfolio'},
    {id: 'experience', name: 'Experience', href: '#experience'},
    {id: 'skills', name: 'Skills', href: '#skills'},
    {id: 'education', name: 'Education', href: '#education'},
  ];
  return (
    <div className="App">
      <NavBar navItems={navItems}/>
      <main className="main">
        <div id="home" className="home" >
          <Home />
        </div>
        <div id="portfolio" className="containers">
          <Portfolio />
        </div>
        <div id="experience" className="containers">
          <Experience />
        </div>
        <div id="skills" className="containers">
          <Skills />
        </div>
        <div id="education" className="containers">
          <Education />
        </div>
        {/* <div id="contact" style={porto}>
          <span>contact</span>
        </div>  */}
      </main>      
    </div>
  );
}

export default App;
