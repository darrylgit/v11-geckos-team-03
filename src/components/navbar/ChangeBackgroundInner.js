import React from "react";

const ChangeBackgroundInner = props => {
  return (
    <div>
      <h2 className="sidebar-menu__heading">Change Background</h2>
      <div
        className="sidebar-menu__interface--close"
        onClick={props.toggleChangeBackground}
      >
        &times;
      </div>
    </div>
  );
};

export default ChangeBackgroundInner;
