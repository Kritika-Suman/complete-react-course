import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [personsState, setPersonsState] = useState({
                 persons: [
                     {name: "Kitty", age: 23},
                     {name: "Divya", age: 21},
                     {name: "Prashant", age: 21}
                 ]
//                 otherState: "some other value"
             });

    const [otherState, setOtherState] = useState("some other value");

    console.log(personsState, otherState) ;

    const switchNameHandler = () => {
//         console.log("Was Clicked!");
//         DON't DO THIS: this.state.persons[0].name = "Kritika";
           setPersonsState({persons: [
                                       {name: "Kritika", age: 23},
                                       {name: "Divya", age: 21},
                                       {name: "Prashant", age: 21}
                                     ]
//                           otherState: personsState.otherState
                         });
      };

    return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={switchNameHandler}>Switch Handler</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby: Drawing</Person>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
            </div>
    );

}

export default App;