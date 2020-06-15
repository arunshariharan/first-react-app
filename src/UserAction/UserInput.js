import React from 'react';

const userInput = (props) => {
  return(
    <input type="text" value={props.defaultValue} onChange={props.changed} />
  );
}

export default userInput;