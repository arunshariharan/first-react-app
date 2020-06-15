import React from 'react';

const person = (props) => {
  return (
    <div>
      <h3>Hello, my name is {props.name}. My age is {props.age}!</h3>
      <p>{props.children}</p>
    </div>
  );
}

export default person;