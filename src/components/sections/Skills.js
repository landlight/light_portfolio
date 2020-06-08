import React from 'react';
import SkillList from './SkillList';

const titleStyle = {
    'color': 'grey',
    'font-weight': 'light',
    'text-align': 'center',
    'padding': '10px'
}

function Skills() {
  const backendItems = [
    'Node.js, Express.js',
    'Java Spring Framework',
    'C# .Net',
    'Python Flask',
    'MongoDB, MySQL',
    'Redis'
  ];
  const frontendItems = [
    'HTML',
    'CSS', 
    'Javascript',
    'Vue.js',
    'React.js (Learning In Progress)'
  ];
  const additionalItems = [
    'Natural Language Processing',
    'Git Management',
    'Google Cloud Services',
  ]
  return (
    <div class="skills">
      <h2 className="text-uppercase" style={titleStyle}>Skills</h2>
      <div className="skillsboard">
        <div className="backend skillsboarditem">
          <h3 className="text-uppercase" style={titleStyle}>Backend Development</h3>
          <SkillList skillItems={backendItems}/>
        </div>
        <div className="frontend skillsboarditem">
          <h3 className="text-uppercase" style={titleStyle}>Frontend Development</h3>
          <SkillList skillItems={frontendItems}/>
        </div>
        <div className="projectmanagement skillsboarditem">
          <h3 className="text-uppercase" style={titleStyle}>Additional Skills</h3>
          <SkillList skillItems={additionalItems}/>
        </div>
      </div>
    </div>
  )
}

export default Skills