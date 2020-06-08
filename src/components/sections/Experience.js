import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const titleStyle = {
  'color': 'grey',
  'font-weight': 'light',
  'text-align': 'left',
  'padding': '10px'
}
const contentTitle = {
  'color': 'lightskyblue',
  'display': 'flex',
  'justify-content': 'space-between'
}
const personalStyle = {
  'color': 'grey',
  'font-weight': 'light',
  'padding-bottom': '10px',
  'text-align': 'justify',
}

function Experience() {
  return (
    <div className="experience">
      <introduction>
        <h2 className="text-uppercase" style={titleStyle}>Experience</h2>
      </introduction>
      <div className="exp">       
        <div className="expItemLeft">
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2019 April - Present</h5>
                <h5>FullStack Developer</h5>
              </div>
              <h5 style={titleStyle}>Zon Radius Company Ltd.</h5>
              <p style={personalStyle}><FaChevronRight /> Designed and Implemented Web Admin Console for Selling Plants (ต้นกล้าชัยโย) using Vue.js</p>
              <p style={personalStyle}><FaChevronRight /> Designed and Implemented Web Platform for Project Management (Nimble) using Vue.js</p>
              <p style={personalStyle}><FaChevronRight /> Designed and Implemented Admin APIs and maintenance APIs for Zon Application using Node.js and Express.js</p>
              <p style={personalStyle}><FaChevronRight /> Provided assistant for creating the Web Platform for Selling Plants (ต้นกล้าชัยโย) using Vue.js</p>
            </li>
          </ul>
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2018 September - 2019 February</h5>
                <h5>Private Tutor</h5>
              </div>
              <h5 style={titleStyle}>Freelance</h5>
              <p style={personalStyle}><FaChevronRight /> Teaching mathamatics and basic programming to students</p>
            </li>
          </ul>
        </div>
        <div className="expItemRight">
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2015 April - 2018 June</h5>
                <h5>Research Assistant (Backend Developer)</h5>
              </div>
              <h5 style={titleStyle}>Intelligent Systems Laboratory (Assumption University)</h5>
              <p style={personalStyle}><FaChevronRight /> Researched, experimented and implemented Natural Processing Algorithm using JAVA and published 'Harnessing Frequency and Language Features for Keyword Extraction on E-commerce Platforms' in 3rd International Conference on Automation, Control and Robotics Engineering (CACRE 2019) 19-22 July 2019, Chengdu, China</p>
              <p style={personalStyle}><FaChevronRight /> Implemented Backend APIs using Express.js(Node.js) for showcasing Assumption University Library Services</p>
              <p style={personalStyle}><FaChevronRight /> Designed and Implemented Backend APIs using Express.js(Node.js) for Thai Chatbot Application</p>
              <p style={personalStyle}><FaChevronRight /> Implemented Backend APIs (Search and Suggestion Algorithms) for the Ecommerce Application (Craze) using C# .Net as an outsource</p>
              <p style={personalStyle}><FaChevronRight /> Implemented Backend API for Thai Chatbot Application using Express.js(Node.js) and Python (for machine learning)</p>
              <p style={personalStyle}><FaChevronRight /> Implemented Backend API for Social Media Application (Big2) using Sails.js</p>
            </li>
          </ul>
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2015 April - 2018 June</h5>
                <h5>Intern (Android Developer)</h5>
              </div>
              <h5 style={titleStyle}>Intelligent Systems Laboratory (Assumption University)</h5>
              <p style={personalStyle}><FaChevronRight /> Implemented Android Application for Team Management System (CATs)</p>
            </li>
          </ul>
        </div>      
      </div>
    </div>
  )
}

export default Experience