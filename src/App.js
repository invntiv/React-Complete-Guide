import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Stephanie", age: "26" }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    // console.log("was clicked!");
    // DONT DO THIS: this.state.person[0]
    this.setState({
      persons: [
        { name: newName, age: "29" },
        { name: "Manu", age: "29" },
        { name: "Stephanie Miller", age: "27" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: "29" },
        { name: event.target.value, age: "29" },
        { name: "Stephanie", age: "26" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick={() => this.switchNameHandler("Maxillian!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
