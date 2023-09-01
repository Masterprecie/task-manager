import TaskItem from './TaskItem';
import PropTypes from 'prop-types'

const TaskList = ({ tasks, onDelete }) => (
	<div style={{ margin: '0 20px' }}>
		<div>
			{tasks.map(task => (
				<TaskItem key={task.id} task={task} onDelete={onDelete} />
			))}
		</div>
	</div>
);

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			dueDate: PropTypes.string.isRequired
		})
	).isRequired,
	onDelete: PropTypes.func.isRequired
};

export default TaskList;
