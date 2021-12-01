import React from 'react';

const MySelect = ({value, handleChange}) => (
	<div className="selectContainer">
		<select className="select" value={value.filtered} onChange={handleChange}>
			<option>All</option>
			<option>Done</option>
			<option>To do</option>
		</select>
	</div>
);
export default MySelect;
