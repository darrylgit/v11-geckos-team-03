import React, { Component } from "react";

import BoardTitle from "./BoardTitle";
import Logo from "./Logo";
import ProjectLink from "./ProjectLink";

import "../../index.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Logo />
        <BoardTitle />
        <ProjectLink />
        {/* <div className="repo-link">Project Repo</div> */}
        {/* 'page-menu' will be a component */}
        {/* <div className="page-menu">Menu</div> */}
      </div>
    );
  }
}

export default NavBar;
