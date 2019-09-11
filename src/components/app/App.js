import React from "react";
import NavBar from "../navbar/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
