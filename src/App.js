import React from 'react';
import './App.css';
import Card from './components/Card';
import Profile from './components/Profile';
import Personalinfo from './components/PersonalInfo';
import Education from './components/Education';
import NavBar from './components/NavBar';

const porto = {
  'height': '800px',
  'border': '1px solid black'
}
function App() {
  const navItems= [
    {id: 'home', name: 'Home', href: '#home'},
    {id: 'portfolio', name: 'Portfolio', href: '#portfolio'},
    {id: 'experience', name: 'Experience', href: '#experience'},
    {id: 'skills', name: 'Skills', href: '#skills'},
    {id: 'education', name: 'Education', href: '#education'},
    {id: 'contact', name: 'Contact', href: '#contact'},
  ];
  return (
    <div className="App">
      <NavBar navItems={navItems}/>
      <header className="App-header">
        <span>
          {/* Hello, I am <b>Chit Khine</b> a web developer who is always enthusastic to explore new things. */}
        </span>
        <span>
          In addtion, I am willing to challenge myself in applying new technologies in the IT industry.
        </span>
      </header>
      <body>
        <div class="content" id="#home">
          {/* <Card>
            <Profile title="Personal Information">
              <Personalinfo />
            </Profile>
          </Card>
          <Card>
            <Profile title="Education">
              <Education />
            </Profile>
          </Card> */}
        </div>
        <div id="portfolio" style={porto}>
          <span >porto</span>
        </div>
      
        <div id="experience" style={porto}>
            <span >exp</span>
        </div>
        <div id="skills" style={porto}>
          <span >ssk</span>
        </div>
        <div id="education" style={porto}>
          <span >edi</span>
        </div>
        <div id="contact" style={porto}>
          <span >contact</span>
        </div>
      </body>
    </div>
  );
}

export default App;
