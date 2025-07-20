import React, { useState } from "react";
import "./DropArea.css";

function DropArea({ onDrop }) {
  const [isDragOver, setIsDragOver] = useState(false);

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  }

  function handleDragLeave() {
    setIsDragOver(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragOver(false);
    const cardIndex = Number(e.dataTransfer.getData("cardIndex"));
    const fromStatus = e.dataTransfer.getData("status");
    if (!isNaN(cardIndex) && fromStatus) {
      onDrop(cardIndex, fromStatus);
    }
  }

  return (
    <div
      className={`drop_area ${isDragOver ? "drag-over" : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragOver && <span className="drop_hint">Drop Here</span>}
    </div>
  );
}

export default DropArea;
