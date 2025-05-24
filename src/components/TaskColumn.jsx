import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";

function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) {
  return (
    <div className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} /> {title}
      </h2>

      <DropArea onDrop={() => onDrop(status, 0)} />

      {tasks.map((task, index) => {
        return (
          task.status === status && (
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
        );
      })}
    </div>
  );
}

export default TaskColumn;
