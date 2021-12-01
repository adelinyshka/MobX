import React from 'react';

const Form = ({state, setState, mobx}) => (
	<form className="form" onSubmit={e => e.preventDefault()}>
		<input value={state} onChange={e => setState(e.target.value)}/>
		<button
			onClick={() => {
				mobx.addTodo(state);
				setState('');
			}}
		>
			Add
		</button>
	</form>
);
export default Form;
