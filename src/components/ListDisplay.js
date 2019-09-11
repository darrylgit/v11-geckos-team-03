import List from "./List";
import React from "react";

const ListDisplay = props => {
  const remove = title => {
    props.remove(title);
  };

  const lists = props.lists.map(list => {
    return <List key={list.title} listTitle={list.title} remove={remove} />;
  });
  return <div className="board__listDisplay">{lists}</div>;
};

export default ListDisplay;
