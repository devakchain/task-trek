import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todo from "../public/todo.png";
import doing from "../public/doing.png";
import done from "../public/done.png";

const oldData = localStorage.getItem("tasks");
console.log(oldData);

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldData) || []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleDelete(taskIndex) {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  }

  function onDrop(status, position) {
    if (activeCard == null || activeCard === undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTask = tasks.filter((tasks, index) => index !== activeCard);

    updatedTask.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTask);
  }
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To Do"
          icon={todo}
          tasks={tasks}
          status={"todo"}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={doing}
          tasks={tasks}
          status={"doing"}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={done}
          tasks={tasks}
          status={"done"}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
}

export default App;
