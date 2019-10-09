import React from "react";

function CardPopup(props) {
  return (
    <div className="card__popup" id={props.cardId}>
      <div className="popup">
        <h2 className="popup__heading popup__heading--main">
          {props.cardTitle}
        </h2>
        <h3 className="popup__heading popup__heading--sub">
          In list: <span className="list-title">{props.inList}</span>
        </h3>
      </div>
    </div>
  );
}

export default CardPopup;
