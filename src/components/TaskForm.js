import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  /* A hook that allows us to dispatch actions to the store. */
  const dispatch = useDispatch();

  const navigate = useNavigate();

  /* Setting the initial state of the task object. */
  const [task, setTasks] = useState({
    title: "",
    description: "",
  });

  /**
   * The handleChange function takes in an event as an argument, and then sets the state of the task
   * object to the value of the event target
   * @param e - the event object
   */
  const handleChange = (e) => {
    setTasks({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * `handleSubmit` is a function that takes an event as an argument and prevents the default behavior of
   * the event, then logs the value of the task variable to the console
   * @param e - the event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTask({ ...task, id: uuid() }));
    navigate("/");
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
