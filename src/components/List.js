import React from "react";

class List extends React.Component {
  state = {
    backgroundColor: "#c5c9eb"
  };
  removeList = () => {
    this.props.remove(this.props.listTitle);
  };

  darkenBackground = () => {
    this.setState({ backgroundColor: "#9093ad" });
  };

  lightenBackground = () => {
    this.setState({ backgroundColor: "#c5c9eb" });
  };

  render() {
    return (
      <div className="list">
        <div className="list__remove" onClick={this.removeList}>
          &times;
        </div>
        <h2 className="list__heading">{this.props.listTitle}</h2>
        <div className="list__cards"></div>
        <div
          className="list__add-card"
          style={{ backgroundColor: this.state.backgroundColor }}
          onMouseEnter={this.darkenBackground}
          onMouseLeave={this.lightenBackground}
        >
          <span className="list__add-card--plus">+</span>
          <span className="list__add-card--label">Add new card</span>
        </div>
      </div>
    );
  }
}

export default List;
