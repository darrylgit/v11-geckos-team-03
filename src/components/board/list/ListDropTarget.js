import React from "react";
import List from "./List";
import { ItemTypes } from "../Constants";
import { useDrop } from "react-dnd";

function ListDropTarget(props) {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ listId: props.listId })
  });
  return (
    <div ref={drop}>
      <List listId={props.listId} listTitle={props.listTitle} />
    </div>
  );
}

export default ListDropTarget;
