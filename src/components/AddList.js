import React from "react";

class AddList extends React.Component {
  state = { listTitle: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.listTitle);

    // Clear input
    this.setState({ listTitle: "" });
  };

  render() {
    return (
      <div className="addList">
        <div className="addList__form">
          <form onSubmit={this.onFormSubmit} className="form">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                value={this.state.listTitle}
                onChange={e => this.setState({ listTitle: e.target.value })}
              />
            </div>
            <div className="form__group">
              <input type="submit" className="form__submit" value="Add List" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddList;
