import React, { Component } from 'react';
import Person from '../Person/Person';

class person extends Component {
    render() {
        console.log('[Persons.js] Perswon rendering..');
        return this.props.persons.map((person, index) => {
            return (
                <div>
                    <h3>{this.props.title}</h3>
                    <Person key={person.id} name={person.name}
                        age={person.age}
                        change={(event) => this.props.clicked(event, person.id)}
                        click={() => this.props.changed(index)}
                    />
                </div>
            );
        }
        )
    }


};

export default person;