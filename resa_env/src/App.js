import React, { Component } from 'react';
import FirstComp from './components/FirstComp';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    console.log('from app.js', id);
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id == id){
        todo.completed = !todo.completed
      } 
      return todo;
    }) })
  }

  render(){
    console.log('app comp',this.state.todos);
    return (
      <div className="App">
        <h1>APP</h1>
        <FirstComp todoVar={ this.state.todos } markComplete={ this.markComplete } />
      </div>
    );
  }
}

export default App;
