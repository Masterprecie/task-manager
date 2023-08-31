import { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EmptyState from './components/EmptyState';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = newTask => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className='container'>

      <div className='flex'>


        <AddTask onAdd={addTask} />

        {tasks.length > 0 ? (
          <TaskList tasks={tasks} onDelete={deleteTask} />
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default App;
