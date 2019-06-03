import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {	
		console.log('FirstComp',this.props.todoVar);
		return this.props.todoVar.map((todo) => (
			<TodoItem key={ todo.id } itemVar={ todo } markComplete={ this.props.markComplete } />
		))
	}
}

// PROPTYPES
Todos.propTypes = {
	todoVar: PropTypes.array.isRequired
}

export default Todos;
