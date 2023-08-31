import propType from 'prop-types'
const TaskItem = ({ task, onDelete }) => (

	<div className="display">
		<li>
			{task.name} - Due: {task.dueDate}
			<button className="btn-del" onClick={() => onDelete(task.id)}>Delete</button>
		</li>
	</div>
);

TaskItem.propType = {
	task: propType.string,
	onDelete: propType.func
}

export default TaskItem;
