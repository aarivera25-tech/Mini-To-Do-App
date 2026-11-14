function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-text">{task.text}</span>
      </label>

      <button
        type="button"
        className="btn-delete"
        onClick={() => onDelete(task.id)}
        aria-label="Eliminar tarea"
      >
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;