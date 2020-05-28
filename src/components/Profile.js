import React from 'react';
import { Container, Row } from 'reactstrap';

function Profile(props) {
  return (
    <div>
      <strong><u>{props.title}</u></strong>  
      {props.children}
    </div>
  );
}

export default Profile