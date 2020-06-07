import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:
      [
        { name: "Obed", age: 26 },
        { name: "Jude", age: 46 },
        { name: "Obed", age: 326 }
      ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:
        [
          { name: "Epaphras", age: 13 },
          { name: newName, age: 46 },
          { name: "Obed", age: 326 }
        ]
    })
  }
  changeNameHandler = (event) => {
    this.setState({
      persons:
        [
          { name: "Epaphras", age: 13 },
          { name: event.target.value, age: 46 },
          { name: "Obed", age: 326 }
        ]
    })
  }
  render() {
    return (
      <div className="App">
        <h3>Hello World am a react beginner</h3>
        <button onClick={this.switchNameHandler.bind(this, 'Rejoice')}>Switch Name</button>
        <Person
          click={this.switchNameHandler.bind(this, "Peace")} name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > Hobby:  figting </Person>
        <Person
          change={this.changeNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
