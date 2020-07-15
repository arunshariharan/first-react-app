import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>Hello, my name is {props.name}. My age is {props.age}!</h3>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  );
}

export default Radium(person);