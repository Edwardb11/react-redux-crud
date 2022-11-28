import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div>
      <header>
        <h1>Tareas {tasks.length}</h1>
        <Link to="/createTask">Crear nueva tarea</Link>
      </header>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task.id)}>Eliminar</button>
          <Link to={`/editTask/${task.id}`}>Editar</Link>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
