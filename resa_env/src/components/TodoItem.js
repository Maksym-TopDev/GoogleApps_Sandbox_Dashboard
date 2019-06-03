import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		if(this.props.itemVar.completed){
			return {
				textDecoration: 'line-through',
				padding: '10px',
				backgroundColor: 'yellow'
			}
		} else {
			return {
				textDecoration: 'none'
			}
		}
	}

	render(){
		const { id, title } = this.props.itemVar;

		console.log('TodoItem', this.props.itemVar);
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } />
					{ title }
				</p>
			</div>
		)
	}
}

TodoItem.propTypes = {
	itemVar: PropTypes.object.isRequired
}

export default TodoItem