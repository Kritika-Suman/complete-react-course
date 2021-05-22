import React, {Component} from 'react';
import styled from 'styled-components';
import classes from './App.module.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

//const StyledButton = styled.button` // We will remove the quotes from the values and add ; after
//                                    //each property-value pair because, we are using regular CSS.
//    background-color: ${props => props.alt ? 'red' : 'green'};
//    // We need to use regular CSS properties not camelCase ones.
//    color: white;
//    font: inherit;
//    border: 1px solid blue;
//    padding: 8px;
//    cursor: pointer;
//    &:hover { // We need to add & before pseudo selectors
//        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//        color: black;
//    }
//`;

class App extends Component {

    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: "Kitty1", name: "Kitty", age: 23},
            {id: "Divya1", name: "Divya", age: 21},
            {id: "Prashant1", name: "Prashant", age: 21}
        ],
        otherState: "some other value",
        showPersons: false
    }

    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // Will be removed in future
    componentWillMount(){
        console.log('[App.js] componentWillMount');
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
    }

//    switchNameHandler = (newName) => {
////        console.log("Was Clicked!");
////        DON't DO THIS: this.state.persons[0].name = "Kritika";
//          this.setState({persons: [
//                                     {name: newName, age: 23},
//                                     {name: "Divya", age: 21},
//                                     {name: "Prashant", age: 21}
//                                  ]})
//    }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        console.log(personIndex);

//        const person = [this.state.persons[personIndex]; // It is the reference of the person,
                                                        // so we should not directly mutate it.

//        we should create a new JavaScript object and then use spread operator.

        const person = {
            ...this.state.persons[personIndex]
        };

//        Alternate approach,
//        const person = object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

//    To delete a person from array of person
    deletePersonHandler = (personIndex) => {

//        const persons = this.state.persons;
//        const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

    }

    togglePersonsHandler = () => {

        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});

    }

    render() {

        console.log('[App.js] render');

//        const style = {
//
//            backgroundColor: 'green',
//            color: 'white',
//            font: 'inherit',
//            border: '1px solid blue',
//            padding: '8px',
//            cursor: 'pointer',
//            ':hover': {
//                backgroundColor: 'lightgreen',
//                color: 'black',
//            }
//
//        };

        let persons = null; // default
//        let btnClass = [classes.Button];
//        let btnClass = '';

        if (this.state.showPersons) { // Its not JSX its Normal JavaScript here

            persons = (
                 <div>
                    <Persons
                        persons = {this.state.persons}
                        clicked = {this.deletePersonHandler}
                        changed = {this.nameChangedHandler}
                    />
                    {/*this.state.persons.map((person, index) => {
                        return <Person
                                    click={() => this.deletePersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id}
                                    changed={(event)=>this.nameChangedHandler(event, person.id)}
                               />
                    })*/}
                </div>
            );

//            style.backgroundColor = 'red';
//            style[':hover'] = {
//                                backgroundColor: 'salmon',
//                                color: 'black',
//                            };

//            btnClass.push(classes.Red)
//              btnClass = classes.Red

        }

//        let classes = ['red', 'bold'].join(' '); // This will return this array of strings into one string
                                                 // "red bold"

//          let classes = [];
//          const assignedClasses = [];
//          if (this.state.persons.length <= 2) {
//                assignedClasses.push(classes.red); // classes = ['red']
//          }
//
//          if  (this.state.persons.length <= 1) {
//                assignedClasses.push(classes.bold); // classes = ['red', 'bold']
//          }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
          );
//        return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
    }

}

export default App; // called higher order component
                            // valid for both class based component and functional component
