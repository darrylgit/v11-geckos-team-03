import React from "react";
import "../../index.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      {/* 'board-title' will be a component */}
      <div className="board-title">Board Title</div>
      <div className="logo">Geckrello</div>
      <div className="repo-link">Project Repo</div>
      {/* 'page-menu' will be a component */}
      <div className="page-menu">Menu</div>
    </div>
  );
};

export default NavBar;
