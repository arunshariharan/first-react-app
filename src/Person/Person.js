import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

  const styling = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={styling}>
      <h3 onClick={props.click}>Hello, my name is {props.name}. My age is {props.age}!</h3>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
}

export default Radium(person);