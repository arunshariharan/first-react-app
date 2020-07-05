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
    showPersons: false
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

  showPersonsHandler = () => {
    const showPersonsValue = this.state.showPersons;
    this.setState({showPersons: !showPersonsValue});
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
        <h1>Hello, welcome to my app!</h1>
        <button
          style={styling}
          onClick={this.showPersonsHandler}>Show People List!</button>
        { this.state.showPersons ? 
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}>
              </Person>

              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={() => this.switchNameHandler('Vanilla custard')}
                changed={this.nameChangedHandler}>
                  My hobbies: Games + Sleeping
              </Person>

              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}>
              </Person>
            </div>
          : null
        }
      </div>
    );
  }
}

export default App;
