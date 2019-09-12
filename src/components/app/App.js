import React from "react";
import Board from "../Board";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Render two elements: a navbar and a board
  render() {
    return (
      <div className="App">
        <nav
          className="navbar"
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "3rem",
            color: "white",
            fontFamily: "sans-serif"
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
