function TaskItem({task, onToggle}) {
  return (
    <label>
      <input
        type = "checkbox"
        checked = {task.completed}
        onChange = {() => onToggle(task.id)}
      />
      <span className = {task.completed ? "completed" : ""}>
        {task.name}
      </span>
    </label>
  );
}

export default TaskItem;