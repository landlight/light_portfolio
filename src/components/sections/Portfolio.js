import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const titleStyle = {
    'color': 'grey',
    'font-weight': 'light',
    'text-align': 'left',
    'padding': '10px'
}
const personalStyle = {
    'color': 'grey',
    'font-weight': 'light',
    'padding': '10px',
    'font-size': '22px'
}

const icon = {
    'width': '17px',
    'height': '17px'
  }

function Portfolio() {
    return (
      <div class="portfo">
        <introduction>
          <h2 className="text-uppercase" style={titleStyle}>Portfolio</h2>
          <div className="text-uppercase" style={personalStyle}>Hi I am <strong>Chit Khine</strong>. I am a FullStack Developer but I specialized more in the <strong>Backend API Development.</strong></div>
          <div className="text-uppercase" style={personalStyle}>I would love to learn and improve myself continuously with the ever evolving technologies.</div> 
        </introduction>
        <div className="personal">
          <div className="personalinfo">
            <h3 className="text-uppercase" style={titleStyle}>Personal Info</h3>
            <div style={personalStyle}>
              <span><FaChevronRight style={icon}/>  Name : <strong class="text-uppercase">Chit Khine</strong></span> 
            </div> 
            <div style={personalStyle}>   
              <span><FaChevronRight style={icon}/>  Nickname : <strong class="text-uppercase">Light</strong></span> 
            </div>
            <div style={personalStyle}>
              <span><FaChevronRight style={icon}/>  Highest Degree : <strong class="text-uppercase">Master of Science (IT)</strong></span> 
            </div>
            <div style={personalStyle}>
              <span><FaChevronRight style={icon}/>  Phone : <strong class="text-uppercase">+66958163472</strong></span> 
            </div> 
            <div style={personalStyle}>   
              <span><FaChevronRight style={icon}/>  Email : <strong>ck.light@gmail.com</strong></span> 
            </div>
            <div style={personalStyle}>   
              <span><FaChevronRight style={icon}/>  Address : <strong class="text-uppercase">Bangkok, Thailand</strong></span> 
            </div>
          </div>
          <div className="personalskills">
            <h3 className="text-uppercase" style={titleStyle}>Personal Skills</h3>
            <div style={personalStyle}>
                <span><FaChevronRight style={icon}/>  A contributing team player with positive attitude</span> 
            </div> 
            <div style={personalStyle}>   
                <span><FaChevronRight style={icon}/>  Excellent in communication</span> 
            </div>
            <div style={personalStyle}>
                <span><FaChevronRight style={icon}/>  Willing to learn and improve consistently</span> 
            </div>
            <div style={personalStyle}>
                <span><FaChevronRight style={icon}/>  Enjoy to solve problems with proper solutions</span> 
            </div> 
            <div style={personalStyle}>   
                <span><FaChevronRight style={icon}/>  Being productive under tight schedules and pressure</span> 
            </div>
          </div>
        </div>
      </div>
    )   
}

export default Portfolio;