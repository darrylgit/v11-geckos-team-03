import React from "react";
import { ItemTypes } from "../Constants";
import { useDrop } from "react-dnd";

function InternalDrop({ style, listId, children }) {
  const [{ canDrop }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ listId: listId }),
    collect: monitor => ({
      canDrop: monitor.canDrop()
    })
  });

  let zIndex = 0;
  if (canDrop) {
    zIndex = 0;
  }

  return (
    <div ref={drop} className="drop-target" style={{ ...style, zIndex }}>
      {children}
    </div>
  );
}

export default InternalDrop;
