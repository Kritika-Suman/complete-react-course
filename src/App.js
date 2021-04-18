import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {id: "Kitty1", name: "Kitty", age: 23},
            {id: "Divya1", name: "Divya", age: 21},
            {id: "Prashant1", name: "Prashant", age: 21}
        ],
        otherState: "some other value",
        showPersons: false
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

    nameChangedHandler = (event) => {
        this.setState({persons: [
                                    {name: "Kitty", age: 23},
                                    {name: event.target.value, age: 21},
                                    {name: "Prashant", age: 21}
                                ]})
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

        const style = {

            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'

        };

        let persons = null; // default

        if (this.state.showPersons) { // Its not JSX its Normal JavaScript here

            persons = (
                 <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                                    click={() => this.deletePersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id}
                               />
                    })}
                </div>
            );

        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                style={style}
//                onClick={() => this.switchNameHandler("Kritika!!")}
                  onClick={this.togglePersonsHandler}
                >
                    Toggle Persons
                </button>
                {persons}
            </div>
          );
//        return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
    }

}

export default App;
