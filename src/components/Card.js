import React from 'react';

function Card(props) {
  return (
    <div class="mycard">
      {props.children}
    </div>
  );
}

export default Card