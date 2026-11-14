import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() === '') return;

    onAddTask(inputText.trim());

    setInputText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit" className="btn-add">
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;