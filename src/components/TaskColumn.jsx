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
  const filteredTasks = tasks
    .map((task, i) => ({ ...task, originalIndex: i }))
    .filter((task) => task.status === status);

  return (
    <div className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt={`${title} icon`} />{" "}
        {title}
      </h2>

      <DropArea
        onDrop={(cardIndex, fromStatus) =>
          onDrop(cardIndex, fromStatus, status, 0)
        }
      />

      {filteredTasks.map((task, i) => (
        <React.Fragment key={task.originalIndex}>
          <TaskCard
            title={task.task}
            tags={task.tags}
            handleDelete={handleDelete}
            index={task.originalIndex}
            status={status}
            setActiveCard={setActiveCard}
          />
          <DropArea
            onDrop={(cardIndex, fromStatus) =>
              onDrop(cardIndex, fromStatus, status, i + 1)
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default TaskColumn;
