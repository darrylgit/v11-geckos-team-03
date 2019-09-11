import AddList from "./AddList";
import ListDisplay from "./ListDisplay";
import React from "react";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: [] };
  }

  currentLists = [];

  List = function(title) {
    this.title = title;
    this.cards = [];
  };

  onListSubmit = title => {
    this.currentLists.push(new this.List(title));
    this.setState({ lists: this.currentLists });
  };

  removeList = title => {
    this.currentLists = this.currentLists.filter(list => list.title !== title);
    this.setState({ lists: this.currentLists });
  };

  render() {
    return (
      <div className="board">
        <ListDisplay
          lists={this.state.lists}
          remove={this.removeList}
        ></ListDisplay>

        <AddList onSubmit={this.onListSubmit}></AddList>
      </div>
    );
  }
}

export default Board;
