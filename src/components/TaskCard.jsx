import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import trash from "../../public/trash.png";

function TaskCard({
  title,
  tags = [],
  handleDelete,
  index,
  setActiveCard,
  status,
}) {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("cardIndex", index); // שולח את האינדקס
        e.dataTransfer.setData("status", status); // שולח את הסטטוס הנוכחי
        setActiveCard(index);
      }}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, i) => (
            <Tag key={i} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={trash} alt="Delete" className="delete_icon" />
        </div>
      </div>
    </article>
  );
}

export default TaskCard;
