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
    'padding': '10px'
}

const icon = {
    'width': '17px',
    'height': '17px'
  }

function Experience() {
    return (
      <div class="portfo">
        <introduction>
          <h2 className="text-uppercase" style={titleStyle}>Experience</h2>
        </introduction>
        <div class="timeline">
            
        </div>
      </div>
    )
}

export default Experience