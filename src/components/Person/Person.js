import React, { Component } from 'react';
import styled from 'styled-components';

class Person extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    // const style = {
    //     ' @media(min - width: 500px)': {
    //         width: '450px'
    //     }
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');

    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');

    }
    render() {
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
                <h3 onClick={this.props.click}>this is person  i am {this.props.name} {this.props.age} </h3>
                <p >{this.props.children}</p>

                <input type="text" onChange={this.props.change} value={this.props.name} />
            </StyledDiv>

            // <div className="Person"  >
            // </div>
        );
    }

}

export default Person;