import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {

     //1
    static getDrivedStateFromProps(props, state){
        console.log("[Persons.js] getDerivedStateFromProps")
        return state;
    }

    // This is a legacy hook, hence one should not use it.
//    componentWillReceiveProps(props){
//        console.log("[Persons.js] componentWillReceiveProps", props);
//    }

    //2
    shouldComponentUpdate(nextProps, nextState){
        console.log("[Persons.js] shouldComponentUpdate")
        return true;
    }

    //3
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons.js] getSnapshotBeforeUpdate")
//        return null;
        return {message: 'Snapshot!'};
    }

    // This is a legacy hook, hence one should not use it.
//    componentWillUpdate(){
//
//    }

    //6
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("[Persons.js] componentDidUpdate")
        console.log(snapshot);
    }

    //4
    render(){
        console.log('[Persons.js] rendering......');
        return this.props.persons.map( (person, index) => {
            //5 Update Child Components Props
            return <Person
                        click = { () => this.props.clicked(index) }
                        name = {person.name}
                        age = {person.age}
                        key = {person.id}
                        changed = { (event) => this.props.changed(event, person.id) }
                   />

        } );
    }
};

export default Persons;
