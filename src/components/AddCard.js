import React from "react";

class AddCard extends React.Component {
  state = {
    mode: "prompt",
    backgroundColor: "",
    cardTitle: ""
  };

  addCardRef = React.createRef();
  addCardRef2 = React.createRef();

  // Handlers for background change on hover

  backgroundColor = {
    default: "#c5c9eb",
    //default: "yellow",
    hover: "#9093ad"
  };

  // Set initial background color, get height for this.promptHeight

  promptHeight = 0;
  inputHeight = 96;

  componentDidMount() {
    this.setState({
      backgroundColor: this.backgroundColor.default
    });

    this.promptHeight = this.addCardRef.current.clientHeight;
    console.log("promptHeight is " + this.promptHeight);
  }

  hoverBackground = () => {
    this.setState({ backgroundColor: this.backgroundColor.hover });
  };

  resetBackground = () => {
    this.setState({ backgroundColor: this.backgroundColor.default });
  };

  // Mode and height toggle

  toggleMode = () => {
    if (this.state.mode === "prompt") {
      this.setState({ mode: "input" });
    } else {
      this.setState({ mode: "prompt" });
    }

    let currentHeight =
      this.state.mode === "input" ? this.promptHeight : this.inputHeight;

    console.log("current height of AddCard is " + currentHeight);
    this.props.setSpansUpdate(currentHeight);
  };

  // Card handler
  onFormSubmit = e => {
    e.preventDefault();

    if (this.state.cardTitle) {
      this.props.onSubmit(this.state.cardTitle);

      // Clear input
      this.setState({ cardTitle: "", mode: "prompt" });
      this.props.setSpansUpdateForCard(this.promptHeight);
    } else {
      return false;
    }
  };

  handleChange = e => {
    this.setState({ cardTitle: e.target.value });
  };

  render() {
    if (this.state.mode === "prompt") {
      return (
        <div
          className="list__addCard list__addCard-prompt"
          style={{ backgroundColor: this.state.backgroundColor }}
          onMouseEnter={this.hoverBackground}
          onMouseLeave={this.resetBackground}
          onClick={this.toggleMode}
          ref={this.addCardRef}
        >
          <span className="list__addCard-prompt--plus">+</span>
          <span className="list__addCard-prompt--label">Add new card</span>
        </div>
      );
    } else {
      return (
        <div
          className="list__addCard list__addCard-form"
          style={{ backgroundColor: this.backgroundColor.default }}
          ref={this.addCardRef2}
        >
          <form onSubmit={this.onFormSubmit} className="form">
            <div className="form__group">
              <input
                type="text"
                className="form form__input form__input--validation"
                value={this.state.cardTitle}
                onChange={this.handleChange}
                style={{ borderBottomColor: this.state.borderColor }}
                placeholder="New card title..."
              />
            </div>
            <div className="form__group">
              <input type="submit" className="form__submit" value="Add Card" />
              <button className="form__cancel" onClick={this.toggleMode}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default AddCard;
