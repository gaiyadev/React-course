import React from 'react';

const person = (props) => {

    return (
        <div className="Person" >
            <h3 onClick={props.click}>this is person  i am {props.name} {props.age} </h3>
            <p >{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );

}

export default person;