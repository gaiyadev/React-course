import React, { Component } from 'react';
import './App.css';
//import './Person/Person.css';
import Radium from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/Error';

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
    const Btn = styled.button`
      background-color: ${props => props.alt ? 'green' : 'red'};
  color: white;
  cursor: pointer;
  padding: 10px;
  borderRadius: border-box;
      &: hover {
          background-color: ${props => props.alt ? 'blue' : 'purple'};
          color: white;
} `;

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   cursor: 'pointer',
    //   padding: '10px',
    //   borderRadius: 'border-box',
    //   ':hover': {
    //     backgroundColor: 'blue',
    //     color: 'white'
    //   }
    // };

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary> <Person name={person.name} age={person.age}
              change={(event) => this.changeNameHandler(event, person.id)} click={this.deletePersonHandler.bind(this, index)}
              key={person.id} />
            </ErrorBoundary>
          })}
          {/* 
          <Person
            click={this.switchNameHandler.bind(this, "Peace")} name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > Hobby:  figting </Person>
          <Person
            change={this.changeNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );

      // style.backgroundColor = 'red'
      // style.color = 'black'
      // style[':hover'] = {
      //   backgroundColor: 'lightgrey',
      //   color: 'white'      // }
    }

    return (
      <div className="App">
        <h3 className={classes.join(' ')} >Hello World am a react beginner</h3>
        <Btn alt={this.state.showPerson} onClick={this.togglePerson}>Switch Name</Btn>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
