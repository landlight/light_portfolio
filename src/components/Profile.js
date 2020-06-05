import React from 'react';

function Profile(props) {
  return (
    <div>
      <strong><u>{props.title}</u></strong>  
      {props.children}
    </div>
  );
}

export default Profile