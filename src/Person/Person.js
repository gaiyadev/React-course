import React from 'react';
import Radium from 'radium';

const person = (props) => {
    const style = {
        ' @media(min - width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style} >
            <h3 onClick={props.click}>this is person  i am {props.name} {props.age} </h3>
            <p >{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    );

}

export default Radium(person);