import React, { Component } from "react";

class BoardTitle extends Component {
  state = {
    title: "Board Title"
  };

  inputHandler = event => {
    const innerText = event.target.innerText;
    console.log(innerText);

    this.setState({
      title: innerText
    });
    console.log(this.state);
  };

  enterHandler = event => {};

  render() {
    return (
      <div
        className="BoardTitle"
        contentEditable="true"
        suppressContentEditableWarning="true"
        onKeyUp={this.enterHandler}
        onInput={this.inputHandler}
      >
        {this.state.title}
      </div>
    );
  }
}

export default BoardTitle;
