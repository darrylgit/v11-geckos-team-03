import React from "react";

const List = props => {
  const removeList = () => {
    props.remove(props.listTitle);
  };

  return (
    <div className="list">
      <div className="list__remove" onClick={removeList}>
        &times;
      </div>
      <h2 className="list__heading">{props.listTitle}</h2>
    </div>
  );
};

export default List;
