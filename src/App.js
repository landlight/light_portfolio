import React from 'react';
import './App.css';
import Card from './components/Card';
import Profile from './components/Profile';
import Personalinfo from './components/PersonalInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          Hello, I am <b>Chit Khine</b> a web developer who is always enthusastic to explore new things.
        </span>
        <span>
          In addtion, I am willing to challenge myself in applying new technologies in the IT industry.
        </span>
      </header>
      <body>
        <Card>
          <Profile title="Personal Information">
            <Personalinfo />
          </Profile>
        </Card>
      </body>
    </div>
  );
}

export default App;
