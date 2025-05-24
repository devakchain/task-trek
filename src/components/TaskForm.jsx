import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  function checkTag(tag) {
    return taskData.tags.some((item) => item === tag);
  }

  function selectTag(tag) {
    if (taskData.tags.some((item) => item === tag)) {
      const filterData = taskData.tags.filter((item) => item !== tag);
      setTaskData({ ...taskData, tags: filterData });
    } else {
      setTaskData({ ...taskData, tags: [...taskData.tags, tag] });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  }

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
          onChange={handleChange}
          name="task"
          value={taskData.task}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              onChange={handleChange}
              name="status"
              value={taskData.status}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}

export default TaskForm;
