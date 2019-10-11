import React from "react";
import Description from "./Description";
import Checklist from "./Checklist";
import SideMenu from "./SideMenu";

function CardPopup(props) {
  return (
    <div className="card__popup-overlay" id={props.cardId}>
      <div className="popup">
        <div className="popup__heading">
          <h2 className="popup__heading--main">{props.cardTitle}</h2>
          <h4 className="popup__heading--sub">
            In list: <span className="list-title">{props.inList}</span>
          </h4>
        </div>

        <a href="#board" className="popup__close" draggable="false">
          &times;
        </a>
        <div className="popup__main">
          <div className="popup__main--left">
            <Description cardId={props.cardId}></Description>

            <Checklist cardId={props.cardId}></Checklist>
          </div>
          <div className="popup__main--right">
            <SideMenu cardId={props.cardId}></SideMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPopup;
