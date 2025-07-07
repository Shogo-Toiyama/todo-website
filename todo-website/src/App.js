import React, { useState } from 'react';
import './App.css';

function App() {
  // variables
  const [tasks, setTasks] = useState([]); //creates vector
  const [inputText, setInputText] = useState(''); //tasks are strings

  // tasks function:
  const addTask = () => {
    if (inputText.trim()) { //trim removes white space, so if there's white space and then no writing, then if statement doesn't execute.
      setTasks([...tasks, {id: Date.now(), text: inputText, completed: false}]); //creates a new task object (that has an id created with timestamp, text information, and completion info) and merges it with existing tasks
      setInputText(''); //Resets input.
    }
  };

  const toggleTask = (id) => { //toggles task from not complete -> completed 
    setTasks(
      tasks.map(function(task){
        if (task.id === id) {
          const updatedTask = {id: task.id, text: task.text, completed: !task.completed}; //reverses the completed task.
          return updatedTask;
        }
        else {
          return task;
        }
      })
    );
  };

  const deleteTask = (id) => { //removes completed task.
    setTasks(tasks.filter(task => task.id !== id));
  }

  const deleteCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }
  
  const keyPress = (inptVar) => {
    if (inptVar.key === 'Enter') { addTask(); }
  }
  
  // Rendering
  // -----------------------------------------
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div className="task-input">
          <input type="text" value={inputText} onChange={(inptVar) => setInputText(inptVar.target.value)} onKeyDown={keyPress} placeholder="Add a new task"/>
          <button onClick={addTask}>Add</button>
      </div>
      <div className="task-list-container">
        <div className="task-list">
          {tasks.length === 0 ? (<p className="empty-msg">No tasks yet...</p>) : (
            tasks.map(task => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <span className="task-text" onClick={() => toggleTask(task.id)}>{task.text}</span>
                <button className="delete-btn" onClick={() => deleteTask(task.id)} aria-label="Delete Task">x</button>
              </div>
            ))
          )}
        </div>
      </div>
      {tasks.length > 0 && (
        <div className="task-footer">
          <div className="task-stats">{tasks.filter(task => !task.completed).length} tasks remaining</div>
          <button className="delete-completed-btn" onClick={deleteCompleted}>Delete Completed</button>
        </div>
      )}
    </div>
  );
}

export default App;
