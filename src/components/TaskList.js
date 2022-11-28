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
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        {" "}
        <h1 className="text-2xl font-bold">Total: {tasks.length}</h1>
        <Link
          to="/createTask"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm">
          Crear nueva tarea
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div className="bg-teal-800 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <div className="flex gap-x-2">
                <h3 className="text-lg font-bold">{task.title}</h3>
                <Link
                  className="bg-zinc-700 px-2 py-1 text-xs rounded-md self-center"
                  to={`/editTask/${task.id}`}>
                  Editar
                </Link>
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  onClick={() => handleDelete(task.id)}>
                  Eliminar
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
