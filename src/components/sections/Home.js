import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';
import { Row, Col } from 'reactstrap';
import image from '../../ck.jpg';

const style = {
  'padding-top': '10px',
  'display': 'flex',
  'align-items': 'center',
  'text-align': 'center'
}
const nameStyle = {
  'color': '#33A1FF'
}
const grey = {
  'color': 'grey',
  'font-weight': 'light'
}
const rowStyle = {
  'padding-bottom': '10px',
  'padding-left': '80px',
  'padding-right': '80px'
}
const center = {
  'text-align': 'center'
}
const icon = {
  'width': '35px',
  'height': '35px'
}

function Personalinfo(props) {
    return (
      <div>
        <div style={style}>
          <img src={image} className="mainProfile" alt="mainProfile"/>
        </div>
        <h1 className="text-uppercase" style={nameStyle}>Chit Khine</h1>
        <h3 style={grey}>FullStack Developer</h3>
        <Row style={rowStyle}>
          <Col xs="4" style={center}>
            <a href="https://github.com/landlight" target="_blank" rel="noopener noreferrer" style={grey}>
              <FaGithub style={icon}/>
            </a>    
          </Col>
          <Col xs="4" style={center}>
            <a href="https://gitlab.com/landlight" target="_blank" rel="noopener noreferrer" style={grey}>
              <FaGitlab style={icon}/>
            </a>  
          </Col>
          <Col xs="4" style={center}>
            <a href="https://www.linkedin.com/in/chit-khine-891a82b5/" target="_blank" rel="noopener noreferrer" style={grey}>
              <FaLinkedin style={icon}/>
            </a>
          </Col>
        </Row>
      </div>
    );
}

export default Personalinfo