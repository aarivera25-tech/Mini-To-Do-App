import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('mini-todo-tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return [
      { id: 1, text: 'Aprender React básico', completed: false },
      { id: 2, text: 'Practicar métodos de arrays ES6', completed: true },
    ];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('mini-todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' devuelve todas
  });

  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app-wrapper">
      <main className="todo-card">
        <h1>Mini To-Do App</h1>
        
        <TaskForm onAddTask={addTask} />
        
        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
        />
        
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
        
        <TaskStats pendingCount={pendingCount} />
      </main>
    </div>
  );
}

export default App;