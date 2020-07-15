import React from 'react';
import cssClasses from './Person.css';

const person = (props) => {

  return (
    <div className={cssClasses.Person}>
      <h3 onClick={props.click}>Hello, my name is {props.name}. My age is {props.age}!</h3>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
}

export default person;