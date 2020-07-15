import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  box-shadow: antiquewhite;
  border: 1px solid #eee;
  margin: 16px auto;
  padding: 16px;
  box-shadow: 0 2px 3px darkslateblue;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {

  return (
    <StyledDiv>
      <h3 onClick={props.click}>Hello, my name is {props.name}. My age is {props.age}!</h3>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </StyledDiv>
  );
}

export default person;