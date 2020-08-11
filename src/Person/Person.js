import React from 'react';
import './Person.css';

// takenote that cally braces are used when dealing with dynamic contect

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}> hallo {props.name} there {props.age} everyone</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

};

export default person;