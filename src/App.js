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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: Math.round(Math.random() * 100)},
        {name: 'MaxBrenner', age: Math.round(Math.random() * 100)},
        {name: 'San Churros', age: Math.round(Math.random() * 100)}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Arun', age: Math.round(Math.random() * 100)},

        // whatever name is typed, we map it just to the 2nd name for now below
        {name: event.target.value, age: Math.round(Math.random() * 100)},
        {name: 'San Churros', age: Math.round(Math.random() * 100)}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, welcome to my app!</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Koko Black')}>Switch name!</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler('Vanilla custard')}
          changed={this.nameChangedHandler}>
            My hobbies: Games + Sleeping
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
