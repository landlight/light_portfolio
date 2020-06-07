import React from 'react';
import { FaStar } from 'react-icons/fa';

const personalStyle = {
    'color': 'grey',
    'font-weight': 'light',
    'padding': '10px',
    'font-size': '20px'
}

const starStyle = {
    'color': '#33A1FF'
}

function SkillList(props) {
    return (
      <div class="skilllist">
        {props.skillItems.map(item => (
          <div> 
            <FaStar style={starStyle}/>
            <span style={personalStyle}>{item}</span>
          </div>
        ))}
      </div>
    )
}

export default SkillList