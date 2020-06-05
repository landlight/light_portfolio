import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const navDisplayStyle = {
  'display': 'flex',
  'flex-direction': 'row',
  'justify-content': 'center',
  'background-color': '#2c3e50',
}

const headingStyle = {
  'min-width': '100px',
  'padding': '15px',
  'color': '#FFFFFF',
  'border': '1px solid lightgrey'
}

function NavBar(props) {
  const [active, setActive] = useState(
    'home'
  )
  function activeClass(id) {
    if (active == id) {
      let divHeight = document.getElementById(id);
      if (divHeight) {
        window.scrollTo(0, divHeight.offsetTop);
      }
      return 'active';
    }
  }
  function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  return (
    <div className="topnav" id="myTopnav">
      {props.navItems.map(item => (
        <a href={item.href} className={activeClass(item.id)} onClick={() => setActive(item.id)} >{item.name}</a> 
      ))}
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <FaBars />
      </a>
    </div>
  );
}

export default NavBar;