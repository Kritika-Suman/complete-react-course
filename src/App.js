import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {name: "Kitty", age: 23},
            {name: "Divya", age: 21},
            {name: "Prashant", age: 21}
        ],
        otherState: "some other value"
    }

    switchNameHandler = (newName) => {
//        console.log("Was Clicked!");
//        DON't DO THIS: this.state.persons[0].name = "Kritika";
          this.setState({persons: [
                                     {name: newName, age: 23},
                                     {name: "Divya", age: 21},
                                     {name: "Prashant", age: 21}
                                  ]})
    }

    nameChangedHandler = (event) => {
        this.setState({persons: [
                                    {name: "Kitty", age: 23},
                                    {name: event.target.value, age: 21},
                                    {name: "Prashant", age: 21}
                                ]})
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={() => this.switchNameHandler("Kritika!!")}>Switch Handler</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Kritika!")}
                    changed={this.nameChangedHandler}>My hobby: Drawing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
          );
//        return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App'));
    }

}

export default App;
