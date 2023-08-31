
import { useState } from 'react';
import propType from 'prop-types'

const AddTask = ({ onAdd }) => {
	const [name, setName] = useState('');
	const [dueDate, setDueDate] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (name && dueDate) {
			onAdd({ name, dueDate });
			setName('');
			setDueDate('');
		}
	};

	return (
		<div className='form'>
			<div>
				<h1>Add Task</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Task name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						type='date'
						value={dueDate}
						onChange={e => setDueDate(e.target.value)}
						style={{ padding: '9px', margin: '0 5px' }}
					/>
					<button className='btn-add' type="submit">Add Task</button>
				</form>
			</div>


		</div>

	);
};

AddTask.propType = {
	onAdd: propType.bool

}

export default AddTask;
