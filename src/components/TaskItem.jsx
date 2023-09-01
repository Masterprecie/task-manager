import PropTypes from 'prop-types'
const TaskItem = ({ task, onDelete }) => (

	<div className="display">
		<div className='task'>
			<p> {task.name}
				<span>
					- Due: {task.dueDate}
				</span>
			</p>

		</div>
		<div>
			<button className="btn-del" onClick={() => onDelete(task.id)}>Delete</button>
		</div>

	</div>
);

TaskItem.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		dueDate: PropTypes.string.isRequired
	}).isRequired,
	onDelete: PropTypes.func.isRequired
};
export default TaskItem;
