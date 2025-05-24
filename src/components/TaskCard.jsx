import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import trash from "../../public/trash.png";

function TaskCard({ title, tags, handleDelete, index, setActiveCard }) {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => {
            return <Tag key={index} tagName={tag} selected={true} />;
          })}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={trash} className="delete_icon" />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
