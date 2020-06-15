import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>Hello {props.userName}</p>
      <p>Welcome to the Jungle! Enter your new username below!</p>
    </div>
  );
}

export default userOutput;