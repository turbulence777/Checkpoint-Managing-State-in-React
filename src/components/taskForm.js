import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({ name: '', description: '' });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.description) {
      alert('Please fill in all fields');
      return;
    }
    if (taskToEdit) {
      editTask(task);
    } else {
      addTask(task);
    }
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
      {taskToEdit && <button onClick={clearEdit}>Cancel Edit</button>}
    </form>
  );
};

export default TaskForm;