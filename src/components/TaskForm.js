import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addTask, updateTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

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
    if (params.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask({ ...task, id: uuid() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTasks(tasks.find((task) => task.id === params.id));
    }
    return () => {};
  }, [setTasks, params.id, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Titulo"
        value={task.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="descripcion"
        value={task.description}
        onChange={handleChange}
      />
      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
