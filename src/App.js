import React, { Component } from 'react';
import './App.css';
// note note of being a relative path
import Person from './Person/Person';


class App extends Component{

  // take note that state is considered a property
  state ={
    persons: [
      { name: 'MAx', age: 58},
      {name:'delight', age:34},
      {name:'takudzwa', age:35},

    ]
  } 
  switchNameHandler= (newName) =>{
    // console.log("click here");
    this.setState({persons: [
      { name: newName , age: 58},
      {name:'delight', age:34},
      {name:'takudzwa', age:100},

    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max' , age: 58},
        {name: event.target.value, age:34},
        {name:'takudzwa', age:100},
  
      ]

    })
  }
  
  render(){

    const style = {
      backgroundColor: 'white',
      front: 'inherit',
      border: '1x solid blue',
      padding: '8px',
    }; 
    return(
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'iweka')} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this, 'hallelluyah')}  />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;