import React, { Component } from 'react';
import './App.css';
import UserInput from './UserAction/UserInput';
import UserOutput from './UserAction/UserOutput';

class App extends Component {
  state = {
    userName: "San Churros"
  }

  usernameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    const styling = {
      border: '1px solid blue',
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">

        <UserOutput
          userName = {this.state.userName}
          />
        <UserInput changed={this.usernameChangedHandler}/> <br />
        <button style={styling} >Take me in!</button>
      </div>
    );
  }
}

export default App;
