import React from 'react';
import classes from 'Person.module.css';


const person = (props) => {
    return(<div>
        <h3 onClick={props.click}>I am {props.name} and I am {props.age} years old</h3>
        <div>{props.children}</div>
    </div>) 
}

export default person