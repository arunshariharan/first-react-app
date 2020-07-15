import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import Shop from './Shop/Shop';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Arun', age: Math.round(Math.random() * 100)},
      {id: 2, name: 'Max', age: Math.round(Math.random() * 100)},
      {id: 3, name: 'Brenner', age: Math.round(Math.random() * 100)}
   ],
    showPersons: false,
    showShops: false,
    userInput: '',
    shops: [
      {id:1, name: 'Woolworths', location: 'Carlton', distance: '700m', nickname: ''},
      {id:2, name: 'Woolworths', location: 'Melbourne Central', distance: '1700m', nickname: ''},
      {id:3, name: 'Coles', location: 'Melbourne Central', distance: '1700m', nickname: ''}
    ]
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

  changeListenerHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  deleteCharacterHandler = (index) =>{
    let currentCharList = [...this.state.userInput.split('')];
    currentCharList.splice(index, 1);
    let currentUserInput = currentCharList.join('');
    this.setState({userInput: currentUserInput});
  }

  shopNicknameHandler = (event, id) => {
    let shopsList = [...this.state.shops];
    let currentShop = shopsList.find(shop => shop.id === id);
    currentShop.nickname = event.target.value;
    this.setState({shops: shopsList});
  }

  showShopsHandler = () => {
    let showshops = this.state.showShops;
    this.setState({showShops: !showshops});
  }

  render() {

    const styling = {
      border: '1px solid blue',
      backgroundColor: 'white',
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
    }

    let charList = this.state.userInput.split('').map((input, index) => {
      return <Char character ={input} clicked = {() => this.deleteCharacterHandler(index)} key={index} />
    });

    let shops = null;

    if(this.state.showShops)
    {
      shops = (
        <div>
          {
            this.state.shops.map((shop) => {
              return <Shop
                name = {shop.name}
                location = {shop.location}
                distance = {shop.distance}
                nickname = {shop.nickname}
                key = {shop.id}
                changed = {(event) => this.shopNicknameHandler(event, shop.id)}
              />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, welcome to my app!</h1>
        <input type="text" onChange={this.changeListenerHandler} value = {this.state.userInput} />
        <Validation charLength= {this.state.userInput.length}/>
        <button
          style={styling}
          onClick={this.showPersonsHandler}>Show People List!
        </button>
        {persons}
        {charList}
        <br /><br /><br />
        <button onClick = {this.showShopsHandler} style = {styling}>Show Shops!</button>
        {shops}
      </div>
    );
  }
}

export default App;
