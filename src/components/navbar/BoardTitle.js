import React, { Component } from "react";

class BoardTitle extends Component {
  state = {
    inputText: "Board Title",
    titleText: "Board Title"
  };

  inputHandler = event => {
    const inputText = event.target.value;

    this.setState({
      inputText: inputText
    });
  };

  keyUpHandler = event => {
    const newTitle = event.target.value;

    switch (event.key) {
      case "Enter":
        this.emptyInputHandler(newTitle);
        break;
      case "Escape":
        this.emptyInputHandler(newTitle);
        break;
      default:
        break;
    }
  };

  onBlurHandler = event => {
    const newTitle = event.target.value;

    this.emptyInputHandler(newTitle);
  };

  emptyInputHandler = newTitle => {
    if (newTitle === "") {
      this.setState({
        inputText: this.state.titleText
      });
    } else {
      this.setState({
        titleText: newTitle
      });
    }
  };

  render() {
    return (
      <div className="BoardTitle">
        <input
          className="title-input"
          value={this.state.inputText}
          onChange={this.inputHandler}
          onKeyUp={this.keyUpHandler}
          onBlur={this.onBlurHandler}
        ></input>
      </div>
    );
  }
}

export default BoardTitle;
