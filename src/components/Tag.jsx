import React from "react";
import "./Tag.css";

function Tag({ tagName, selectTag, selected }) {
  const tagClass = `${tagName.toLowerCase()} ${selected ? "selected" : ""}`;

  return (
    <button
      type="button"
      className={`tag ${tagClass}`}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
}

export default Tag;
