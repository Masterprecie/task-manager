import TaskItem from './TaskItem';
import propType from 'prop-types'

const TaskList = ({ tasks, onDelete }) => (
	<ul>
		{tasks.map(task => (
			<TaskItem key={task.id} task={task} onDelete={onDelete} />
		))}
	</ul>
);

TaskList.propType = {
	tasks: propType.string,
	onDelete: propType.func
}

export default TaskList;
