import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:
      [
        { name: "Obed", id: "vevgrgvvev", age: 26 },
        { name: "Jude", id: "sdsdd", age: 46 },
        { name: "Obed", id: "scscscss", age: 326 }
      ],
    showPerson: false

  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:
        [
          { name: "Epaphras", age: 13 },
          { name: newName, age: 46 },
          { name: "Obed", age: 326 }
        ],
    })
  }
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons

    });

  }

  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age}
              change={(event) => this.changeNameHandler(event, person.id)} click={this.deletePersonHandler.bind(this, index)}
              key={person.id} />
          })}
          {/* 
          <Person
            click={this.switchNameHandler.bind(this, "Peace")} name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > Hobby:  figting </Person>
          <Person
            change={this.changeNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h3>Hello World am a react beginner</h3>
        <button onClick={this.togglePerson}>Switch Name</button>
        {persons}

      </div>
    );
  }
}

export default App;
