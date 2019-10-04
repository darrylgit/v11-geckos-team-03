import React from "react";
import { ItemTypes } from "../Constants";
import { useDrag } from "react-dnd";
import { connect } from "react-redux";
import { moveCard } from "../../../actions";

function Card(props) {
  // Drag source hook
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        props.moveCard(props.cardId, dropResult.listId);
      }
    },
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
        zIndex: isDragging ? 3 : 3,
        cursor: "move"
      }}
    >
      {props.cardTitle}
    </div>
  );
}

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(
  mapStateToProps,
  { moveCard }
)(Card);
