import React from 'react';
import { FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';
import { Container, Row, Col } from 'reactstrap';
import image from '../GodShiro.jpg'

const black = {
  'color': 'black',
}
const orange = {
  'color': 'orange'
}
const rowStyle = {
  'padding-top': '10px' 
}
const center = {
  'text-align': 'center'
}
function Personalinfo(props) {
    return (
      <Container>
        <Row><img src={image} class="profile" style={rowStyle}/></Row>
        <Row style={rowStyle}>Chit Khine</Row>
        <Row style={rowStyle}>+66958163472</Row>
        <Row style={rowStyle}>ck.light@gmail.com</Row>
        <Row style={rowStyle}>
          <Col xs="4" style={center}>
            <a href="https://github.com/landlight" target="_blank" style={black}>
              <FaGithub />
            </a>    
          </Col>
          <Col xs="4" style={center}>
            <a href="https://gitlab.com/landlight" target="_blank" style={orange}>
              <FaGitlab />
            </a>  
          </Col>
          <Col xs="4" style={center}>
            <a href="https://www.linkedin.com/in/chit-khine-891a82b5/" target="_blank">
              <FaLinkedin />
            </a>
          </Col>
        </Row> 
      </Container>
    );
}

export default Personalinfo