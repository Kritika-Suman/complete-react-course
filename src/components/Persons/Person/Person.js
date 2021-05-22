import React from 'react';
//import styled from 'styled-components'
import classes from './Person.module.css';

//const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//
//   @media (min-width: 500px){
//           width: 450px;
//   }
//`;

const person = (props) => {

    console.log('[Person.js] rendering......');

//    const style = {
//           '@media (min-width: 500px)': {
//                width: '450px'
//           }
//           // If we resize the application, boxes will stay in the middle and will not grow in width anymore.
//           // They will be growing in width to 60% of the size though, if we go below the media query threshold,
//           // which is 500 px otherwise it will stay fixed with 450 px.
//    };

    return(
//        <div className="Person" style={style}>
//        <StyledDiv>
          <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
          </div>
//        </StyledDiv>
    )

};

export default person;