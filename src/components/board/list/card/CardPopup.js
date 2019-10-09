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

        <a href="#board" className="popup__close">
          &times;
        </a>
        <div className="popup__main">
          <div className="popup__main--left">
            <Description cardId={props.cardId}></Description>
            <h3 className="popup__widget-heading">Checklist</h3>
            <Checklist></Checklist>
          </div>
          <div className="popup__main--right">
            <SideMenu></SideMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPopup;
