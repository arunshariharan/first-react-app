import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Arun', age: Math.round(Math.random() * 100)},
      {id: 2, name: 'Max', age: Math.round(Math.random() * 100)},
      {id: 3, name: 'Brenner', age: Math.round(Math.random() * 100)}
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

  nameChangedHandler = (event, id) => {
    let persons = [...this.state.persons];
    let person = persons.find(p => p.id === id);
    person.name = event.target.value;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // slice without args just returns a new copy of an array without modifying anything 
    // if we "SPLICE" in the next step without slicing, we will end up modifying original state
    // which is dangerous since arrays are reference types.
    // const persons = this.state.persons.slice();

    // As an alternative, we can use the spread operator as below
    // this copies and populates existing array into the new array
    const persons = [...this.state.persons];

    // splice adds/ removes data in an array. 
    // The first argument specifies the index to start splicing
    // Second arg says how many to remove after that index
    persons.splice(personIndex, 1);

    this.setState({persons: persons});
  }

  showPersonsHandler = () => {
    const showPersonsValue = this.state.showPersons;
    this.setState({showPersons: !showPersonsValue});
  }

  render() {

    const styling = {
      border: '1px solid blue',
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
      <div>
        {
          this.state.persons.map((person, index) => {
            return <Person 
              click = {this.deletePersonHandler.bind(this, index)}
              name = {person.name}
              age = {person.age} 
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)}
            /> 
          })
        }
      </div>
      );

      styling.backgroundColor = 'red';
    }

    let classNames = [];
    if(this.state.persons.length <= 2) classNames.push('red');
    if(this.state.persons.length <= 1) classNames.push('bold');
    console.log(this.state.persons, classNames);

    return (
      <div className="App">
        <h1>Hello, welcome to my app!</h1>
        <p className={classNames.join(' ')}>This really works!</p>
        <button
          style={styling}
          onClick={this.showPersonsHandler}>Show People List!</button>
        {persons}
      </div>
    );
  }
}

export default App;
