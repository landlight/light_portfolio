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

const honorStyle = {
  'text-align': 'left'
}

function Education() {
  return (
    <div className="education">
      <introduction>
        <h2 className="text-uppercase" style={titleStyle}>Education</h2>
      </introduction>
      <div className="exp">       
        <div className="expItemLeft">
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2015 September - 2018 June</h5>
                <h5>Master Degree (Assumption University)</h5>
              </div>
              <h5 style={titleStyle}>Master of Science (IT in Software Engineering)</h5>
              <p style={personalStyle}><FaChevronRight /> Scholarship by Intelligent Systems Laboratory</p>
              <p style={personalStyle}><FaChevronRight /> GPA - 3.81</p>
            </li>
          </ul>
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2011 May - 2015 May</h5>
                <h5>Bachelor Degree</h5>
              </div>
              <h5 style={titleStyle}>Bachelor of Science (Computer Science)</h5>
              <p style={personalStyle}><FaChevronRight /> Scholarship by TICA (Thailand International Cooperation Agency)</p>
              <p style={personalStyle}><FaChevronRight /> GPA - 3.76</p>
              <p style={personalStyle}><FaChevronRight /> Honors</p>
              <p style={honorStyle}> - Magnum Cum Laude</p>
              <p style={honorStyle}> - Rector’s Certificate of Honor (2011, 2012, 2015)</p>
              <p style={honorStyle}> - Certificate of Honor by Assumption University Myanmar Student’s Community (AUMSC, 2014) </p>
            </li>
          </ul>
        </div>
        <div className="expItemRight">
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2011</h5>
                <h5>International Advanced Diploma in Computer Studies</h5>
              </div>
              <h5 style={titleStyle}>NCC Education University of Greenwich, United Kingdom</h5>
            </li>
          </ul>
          <ul class="timeline"> 
            <li>
              <div className="content" style={contentTitle}>
                <h5>2010</h5>
                <h5>International Diploma in Computer Studies</h5>
              </div>
              <h5 style={titleStyle}>NCC Education University of Greenwich, United Kingdom</h5>
            </li>
          </ul>
        </div>      
      </div>
    </div>
  )
}

export default Education