import React, { Component } from "react";

class BoardTitle extends Component {
  state = {
    inputText: "Board Title",
    titleText: "Board Title"
  };

  // Sets input size on first render to length of state variable titleText
  componentDidMount() {
    this.setInputSize();
  }

  // Sets input size when user types, and sets state variable inputText to current input value
  inputHandler = event => {
    const inputText = event.target.value;

    // Sets input size to current input value
    event.target.value.length > 0
      ? (event.target.size = inputText.length)
      : (event.target.size = 1);

    this.setState({
      inputText: inputText
    });
  };

  // If user hits Enter or Escape, calls function checkEmptyInput
  keyDownHandler = event => {
    const newTitle = event.target.value;

    switch (event.key) {
      case "Enter":
        this.checkEmptyInput(newTitle);
        break;
      case "Escape":
        this.checkEmptyInput(newTitle);
        break;
      default:
        break;
    }
  };

  // When user clicks outside input, calls function checkEmptyInput, and sets input class for default styling
  onBlurHandler = event => {
    const newTitle = event.target.value;

    this.checkEmptyInput(newTitle);

    event.target.className = "navbar__input";
  };

  // When user clicks inside input, sets input class to change styling, and selects all current input text
  onFocusHandler = event => {
    event.target.className = "navbar__input navbar__input--infocus";

    event.target.select();
  };

  // Checks if current input value is empty string; if true, sets current input value to most recently-set state variable titleText; if false, sets titleText to current input value
  checkEmptyInput = newTitle => {
    if (newTitle === "") {
      this.setState({
        inputText: this.state.titleText
      });

      this.setInputSize();
    } else {
      this.setState({
        titleText: newTitle
      });

      this.setInputSize();
    }
  };

  // Sets size of input based on current value
  setInputSize = () => {
    const input = document.querySelector("input");

    input.size = this.state.titleText.length;
  };

  render() {
    return (
      <div className="navbar__title">
        <input
          className="navbar__input"
          value={this.state.inputText}
          onChange={this.inputHandler}
          onKeyDown={this.keyDownHandler}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
        ></input>
      </div>
    );
  }
}

export default BoardTitle;
