import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Arun', age: Math.round(Math.random() * 100)},
      {name: 'Max', age: Math.round(Math.random() * 100)},
      {name: 'Brenner', age: Math.round(Math.random() * 100)}
   ],
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Arun', age: Math.round(Math.random() * 100)},
        {name: 'MaxBrenner', age: Math.round(Math.random() * 100)},
        {name: 'San Churros', age: Math.round(Math.random() * 100)}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, welcome to my app!</h1>
        <button onClick={this.switchNameHandler}>Switch name!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Games + Sleeping</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
