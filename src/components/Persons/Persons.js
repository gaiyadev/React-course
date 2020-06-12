import React from 'react';
import Person from '../Person/Person';

const persons = (props) => {
    console.log('[Persons.js] Perswon rendering..');
    return props.persons.map((person, index) => {
        return (
            <div>
                <h3>{props.title}</h3>
                <Person key={person.id} name={person.name}
                    age={person.age}
                    change={(event) => props.clicked(event, person.id)}
                    click={() => props.changed(index)}
                />
            </div>
        );
    }
    )
};

export default persons;