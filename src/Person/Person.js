import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
           '@media (min-width: 500px)': {
                width: '450px'
           }
           // If we resize the application, boxes will stay in the middle and will not grow in width anymore.
           // They will be growing in width to 60% of the size though, if we go below the media query threshold,
           // which is 500 px otherwise it will stay fixed with 450 px
    };

    return(
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    )

};

export default Radium(person);