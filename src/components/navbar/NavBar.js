import React, { Component } from "react";

import BoardTitle from "./BoardTitle";

import "../../index.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <BoardTitle />
        {/* <div className="logo">Geckrello</div> */}
        {/* <div className="repo-link">Project Repo</div> */}
        {/* 'page-menu' will be a component */}
        {/* <div className="page-menu">Menu</div> */}
      </div>
    );
  }
}

export default NavBar;
