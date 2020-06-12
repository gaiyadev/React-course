import React from 'react';
import styled from 'styled-components';

const person = (props) => {
    // const style = {
    //     ' @media(min - width: 500px)': {
    //         width: '450px'
    //     }
    // }
    const StyledDiv = styled.div`
    width: 60%;
    margin:  12px auto;
    border: 2px solid green;
    padding: 20px;
    color: red;

    button {
        background-color: green;
        color: wheat;
        padding: 12px 10px;    
}
button:hover {
    back
}
    @media(min-width: 500px) {
        .Person { 
            width: 450px;
        }
}`;

    return (
        <StyledDiv   >
            <h3 onClick={props.click}>this is person  i am {props.name} {props.age} </h3>
            <p >{props.children}</p>

            <input type="text" onChange={props.change} value={props.name} />
        </StyledDiv>

        // <div className="Person"  >
        // </div>
    );

}

export default person;