import React, { useState } from 'react';
import './App.css';
import TaskItem from './components/TaskItem';
import AddButton from './components/AddButton';

function App() {
  // Task data is hardcoded for now; will be loaded dynamically later
  const [tasks, setTasks] = useState([
    {id: 1, name: 'Task 1', completed: false},
    {id: 2, name: 'Task 2', completed: true},
    {id: 3, name: 'Task 3', completed: false},
    {id: 4, name: 'Task 4', completed: true},
    {id: 5, name: 'Task 5', completed: false}
  ]);
  
  // Function to toggle the completion status of a task
  const onToggleCheckbox = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const handleAdd = () => {
    alert("Add button clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do List</h1>
        <div className="add-button-margin">
          <AddButton onClick={handleAdd}/>
        </div>
        {/* Display list of tasks */}
        <div className="task-list">
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggle={onToggleCheckbox}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
