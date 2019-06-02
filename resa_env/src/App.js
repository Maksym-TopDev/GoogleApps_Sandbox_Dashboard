import React, { Component } from 'react';
import FirstComp from './components/FirstComp';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        complete: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        complete: false
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        complete: false
      }
    ]
  }
  render(){
    console.log('app comp',this.state.todos);
    return (
      <div className="App">
        <h1>APP</h1>
        <FirstComp todoVar={ this.state.todos } />
      </div>
    );
  }
}

export default App;
