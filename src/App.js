import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

// styled-components uses normal css 
// the backticks are called template literals in javascript. We can use ${} to evaluate javascript 
// and finall all of it is combined into a string when compiled
// these can be added into a separate file and called in as well, if this file gets too big
const StyledButton = styled.button`
  border: 1px solid blue;
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: ${props => props.alt ? 'black' : 'white'};
  font: inherit;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'lightpink' : 'lightgreen'};
    color: ${props => props.alt ? 'black' : 'black'};
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Arun', age: Math.round(Math.random() * 100) },
      { id: 2, name: 'Max', age: Math.round(Math.random() * 100) },
      { id: 3, name: 'Brenner', age: Math.round(Math.random() * 100) }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: Math.round(Math.random() * 100) },
        { name: 'MaxBrenner', age: Math.round(Math.random() * 100) },
        { name: 'San Churros', age: Math.round(Math.random() * 100) }
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    let persons = [...this.state.persons];
    let person = persons.find(p => p.id === id);
    person.name = event.target.value;
    this.setState({ persons: persons });
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

    this.setState({ persons: persons });
  }

  showPersonsHandler = () => {
    const showPersonsValue = this.state.showPersons;
    this.setState({ showPersons: !showPersonsValue });
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={this.deletePersonHandler.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      );
    }

    let classNames = [];
    if (this.state.persons.length <= 2) classNames.push('red');
    if (this.state.persons.length <= 1) classNames.push('bold');

    return (
      <div className="App">
        <h1>Hello, welcome to my app!</h1>
        <p className={classNames.join(' ')}>This really works!</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.showPersonsHandler}>Show People List!
        </StyledButton>
        {persons}
      </div>

    );
  }
}

export default App;
