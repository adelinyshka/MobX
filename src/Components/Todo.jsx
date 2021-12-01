import React from 'react';
import '../Styles/App.css';

const Todo = ({affair, todo}) => (
	<div className="Todo__Item">
		<input
			type="checkbox"
			checked={affair.done}
			onChange={() => todo.completeTodo(affair.id)}
		/>
		{affair.title}
		&nbsp;
		<button onClick={() => todo.deleteTodo(affair.id)}>Delete</button>
	</div>
);
export default Todo;
