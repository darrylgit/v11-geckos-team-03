import React from "react";
import List from "./List";
import { ItemTypes } from "../Constants";
import { useDrop } from "react-dnd";

function ListDropTarget(props) {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ listId: props.listId })
  });

  let spans = 13;

  const setSpans = function(spans) {
    return spans;
  };

  return (
    <div ref={drop} class="drop-target" style={{ gridRowEnd: `span ${spans}` }}>
      <List
        listId={props.listId}
        listTitle={props.listTitle}
        setDropTargetSpans={setSpans}
      ></List>
    </div>
  );
}

export default ListDropTarget;
