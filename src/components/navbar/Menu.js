import React from "react";

const Menu = props => {
  if (props.sidebarHidden) {
    return (
      <div className="menu navbar__menu">
        <h1 onClick={props.toggleSidebar}>Show Menu</h1>
      </div>
    );
  } else {
    return (
      <div className="menu navbar__menu">
        <h1 onClick={props.toggleSidebar}>Hide Menu</h1>
      </div>
    );
  }
};

export default Menu;
