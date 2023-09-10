import { useReducer, useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EmptyState from './components/EmptyState';
import taskReducer from './taskReducer';

const initialState = [];

const App = () => {
  // const [tasks, setTasks] = useState([]);

  // const addTask = (newTask) => {
  //   setTasks([...tasks, { ...newTask, id: Date.now() }]);
  // };

  // const deleteTask = (taskId) => {
  //   setTasks(tasks.filter(task => task.id !== taskId));
  // };

  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [nextTaskId, setNextTaskId] = useState(1);

  const addTask = (task) => {
    const newTask = { ...task, id: nextTaskId };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setNextTaskId(nextTaskId + 1);
  };

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  return (
    <div className='container'>
      <AddTask onAdd={addTask} />

      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} />
      ) : (
        <EmptyState />
      )}
    </div>

  );
};

export default App;
