import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import image from '../au.jpg'

const rowStyle = {
  'padding-top': '10px' 
}
const imageStyle = {
  'padding-top': '10px',
  'display': 'flex',
  'align-items': 'center',
  'text-align': 'center'
}

function Personalinfo(props) {
    return (
      <Container>
        <div style={imageStyle}>
          <img src={image} class="profile" alt="profile"/>
        </div>
        <Row style={rowStyle}>Master of Science (Software Engineering)</Row>
        <Row style={rowStyle}>GPA - 4.00</Row>
        <Row style={rowStyle}>Bachelor of Science (Computer Science)</Row>
        <Row style={rowStyle}>GPA - 4.00</Row>
      </Container>
    );
}

export default Personalinfo