import { useState } from "react";

export const TaskManager = () => {
  const [taskList, setTasklist] = useState([]); //taskList es un array que contiene las tareas y setTasklist es una función que nos permite actualizar este array.
  const [task, setTask] = useState("");   // task es una cadena que contiene la tarea actual y setTask es una función que nos permite actualizar esta cadena.

  const handleNewTask = () => {         // Definimos una función handleNewTask que agrega una nueva tarea a la lista de tareas.
    setTasklist([...taskList, { text: task, completed: false }]);
  };
  const handleTaskInput = (e) => {   // Definimos una función handleTaskInput que actualiza la tarea actual con el valor del evento.
    setTask(e.target.value);
  };
  const handleDeleteTask = (index) => { // Definimos una función handleDeleteTask que elimina una tarea de la lista de tareas en base a su índice.
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTasklist(updatedTaskList);
  };
  const handleCompleted = (index) => {   // Definimos una función handleCompleted que cambia el estado de completado de una tarea en base a su índice.
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = !updatedTaskList[index].completed;
    setTasklist(updatedTaskList);
  };
  console.log(taskList);

  return ( // Retornamos el JSX que se renderizará en el DOM.
    <>
      {taskList.length > 0 ? (
        <div>
          Lista de tareas
          {taskList.map((item, index) => {
            return (
              <li key={index}>
                {item.text}
                <button
                  onClick={() => {
                    handleCompleted(index);
                  }}
                >
                  {item.completed ? "Terminado" : "No terminado"}
                </button>
                <button
                  onClick={() => {
                    handleDeleteTask(index);
                  }}
                >
                  Eliminar tarea
                </button>
              </li>
            );
          })}
        </div>
      ) : (
        <p>No hay tareas</p>
      )}
      <label>Agregar nueva tarea</label>
      <input value={task} onChange={handleTaskInput} />
      <button onClick={handleNewTask}>+</button>
    </>
  );
};
