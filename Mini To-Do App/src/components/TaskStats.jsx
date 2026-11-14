function TaskStats({ pendingCount }) {
  return (
    <footer className="task-stats">
      <span>
        {pendingCount === 1
          ? 'Queda 1 tarea pendiente'
          : `Quedan ${pendingCount} tareas pendientes`}
      </span>
    </footer>
  );
}

export default TaskStats;