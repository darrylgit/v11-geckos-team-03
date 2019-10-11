import React from "react";
import { connect } from "react-redux";
import { archiveCard, moveCard, copyCard } from "../../../../actions";

class SideMenu extends React.Component {
  state = { modal: "", value: this.props.listHome };

  openMoveCardModal = () => {
    this.setState({ modal: "move" });
  };

  openCopyCardModal = () => {
    this.setState({ modal: "copy" });
  };

  closeModal = () => {
    this.setState({ modal: "" });
  };

  archiveCard = () => {
    this.props.archiveCard(this.props.cardId);
    this.setState({ modal: "" });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onMoveSubmit = e => {
    e.preventDefault();
    this.props.moveCard(this.props.cardId, this.state.value);
    this.setState({ modal: "", value: this.props.listHome });
  };

  onCopySubmit = e => {
    e.preventDefault();

    // Generate a unique key and cardId in the event of duplicate card titles
    const generateCardId = inputId => {
      if (!this.props.cards.find(card => card.cardId === inputId)) {
        return inputId;
      } else {
        inputId = `${inputId}-duplicate`;
        return generateCardId(inputId);
      }
    };
    let cardId = generateCardId(this.props.cardId);

    this.props.copyCard(this.props.cardId, cardId, this.state.value);

    this.setState({ modal: "", value: this.props.listHome });
  };

  listOptionsArray = () =>
    this.props.lists
      .filter(list => !list.archived)
      .map(list => (
        <option key={list.listId} value={list.listId}>
          {list.title}
        </option>
      ));

  render() {
    if (!this.state.modal) {
      return (
        <div className="sidemenu">
          <button className="sidemenu__button" onClick={this.openMoveCardModal}>
            Move Card
          </button>
          <button className="sidemenu__button" onClick={this.openCopyCardModal}>
            Copy Card
          </button>
          <button className="sidemenu__button" onClick={this.archiveCard}>
            Archive Card
          </button>
        </div>
      );
    } else if (this.state.modal === "move") {
      return (
        <div className="sidemenu">
          <button className="sidemenu__button" onClick={this.openMoveCardModal}>
            Move Card
          </button>
          <button className="sidemenu__button" onClick={this.openCopyCardModal}>
            Copy Card
          </button>
          <button className="sidemenu__button" onClick={this.archiveCard}>
            Archive Card
          </button>
          <div className="sidemenu__modal">
            <h4 className="sidemenu__modal--heading">Move Card</h4>
            <form onSubmit={this.onMoveSubmit}>
              <label>
                Choose destination list:{" "}
                <select value={this.state.value} onChange={this.handleChange}>
                  {this.listOptionsArray()}
                </select>
              </label>

              <input type="submit" value="Move" />
            </form>
          </div>
        </div>
      );
    } else if (this.state.modal === "copy") {
      return (
        <div className="sidemenu">
          <button className="sidemenu__button" onClick={this.openMoveCardModal}>
            Move Card
          </button>
          <button className="sidemenu__button" onClick={this.openCopyCardModal}>
            Copy Card
          </button>
          <button className="sidemenu__button" onClick={this.archiveCard}>
            Archive Card
          </button>
          <div className="sidemenu__modal">
            <h4 className="sidemenu__modal--heading">Copy Card</h4>
            <form onSubmit={this.onCopySubmit}>
              <label>
                Choose destination list:{" "}
                <select value={this.state.value} onChange={this.handleChange}>
                  {this.listOptionsArray()}
                </select>
              </label>

              <input type="submit" value="Copy" />
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { lists, cards } = state;
  const listHome = cards.filter(card => card.cardId === ownProps.cardId)[0]
    .listHome;
  return { lists, cards, listHome };
};

export default connect(
  mapStateToProps,
  { archiveCard, moveCard, copyCard }
)(SideMenu);
