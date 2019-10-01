import React from "react";
import { ItemTypes } from "../Constants";
import { useDrag } from "react-dnd";

/*
class Card extends React.Component {
  

  render() {
    
  }
}
*/

function Card(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      className="card"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move"
      }}
    >
      {props.cardTitle}
    </div>
  );
}

export default Card;
