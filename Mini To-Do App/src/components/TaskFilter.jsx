function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="task-filters">
      <button
        type="button"
        className={currentFilter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        Todas
      </button>
      <button
        type="button"
        className={currentFilter === 'active' ? 'active' : ''}
        onClick={() => onFilterChange('active')}
      >
        Pendientes
      </button>
      <button
        type="button"
        className={currentFilter === 'completed' ? 'active' : ''}
        onClick={() => onFilterChange('completed')}
      >
        Completadas
      </button>
    </div>
  );
}

export default TaskFilter;