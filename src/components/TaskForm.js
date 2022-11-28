import React, { useState } from "react";

const TaskForm = () => {
  const [task, setTasks] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setTasks({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="descripcion"
        onChange={handleChange}
      />
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
