import { useState } from 'react'
import TaskList from '../components/TaskList.jsx';
import AddTask from '../components/AddTask.jsx';

function App() {
  const [tasks, setTasks] = useState([]);

  function deleteTask(deletedTask){
    setTasks(prev => prev.filter(task => task !== deletedTask))
  }

  function toggleTask(task){
    task.completed = !task.completed
  }

  return (
    <>
      <AddTask setTasks={setTasks}/>
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </>
  )
}

export default App
