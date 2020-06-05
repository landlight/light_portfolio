import React from 'react';
import './App.css';
// import Card from './components/Card';
// import Profile from './components/Profile';
// import Personalinfo from './components/PersonalInfo';
// import Education from './components/Education';
import NavBar from './components/NavBar';
import Home from './components/Home';

// const porto = {
//   'border': '1px solid black',
// }
// const cardStyle = {
//   'width': '100%'
// }
function App() {
  const navItems= [
    {id: 'home', name: 'Home', href: '#home'},
    // {id: 'portfolio', name: 'Portfolio', href: '#portfolio'},
    // {id: 'experience', name: 'Experience', href: '#experience'},
    // {id: 'skills', name: 'Skills', href: '#skills'},
    // {id: 'education', name: 'Education', href: '#education'},
    // {id: 'contact', name: 'Contact', href: '#contact'},
  ];
  return (
    <div className="App">
      <NavBar navItems={navItems}/>
      <main className="main">
        <div id="home" className="home" >
          <Home />
        </div>
        {/* <div id="portfolio" style={porto}>
          <Card style={cardStyle}>
            <Profile title="Personal Information">
              <Personalinfo />
            </Profile>
          </Card>
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
        </div> */}
      </main>      
    </div>
  );
}

export default App;
