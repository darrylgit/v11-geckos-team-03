import Board from "../Board";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <nav
          className="navbar"
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "3rem",
            color: "white"
          }}
        >
          Navbar Here
        </nav>
        <Board />
      </div>
    );
  }
}

export default App;
