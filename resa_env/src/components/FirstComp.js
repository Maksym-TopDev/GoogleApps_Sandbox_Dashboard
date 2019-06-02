import React, { Component } from 'react';

class Todos extends Component {	
	render() {	
		console.log('FirstComp',this.props.todoVar);
		return this.props.todoVar.map((todo) => (
			<div>{ todo.title }</div>
		))
	}
}

export default Todos;
