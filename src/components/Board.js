import AddList from "./AddList";
import List from "./List";
import React from "react";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lists: [] };
  }

  currentLists = [];

  // List constructor function
  List = function(title) {
    this.title = title;
    this.cards = [];
  };

  // Update state with new list, setting the list title as the argument 'title'
  onListSubmit = title => {
    this.currentLists.push(new this.List(title));
    this.setState({ lists: this.currentLists });
  };

  // Iterate over lists, keep only the ones that have a title other than the function argument
  removeList = title => {
    this.currentLists = this.currentLists.filter(list => list.title !== title);
    this.setState({ lists: this.currentLists });
  };

  // Function to create List components from state
  listsArray = () =>
    this.state.lists.map(list => {
      return (
        <List
          key={list.title}
          listTitle={list.title}
          remove={this.removeList}
        />
      );
    });

  render() {
    return (
      <div className="board">
        {this.listsArray()}
        <AddList
          onSubmit={this.onListSubmit}
          currentLists={this.state.lists}
        ></AddList>
      </div>
    );
  }
}

export default Board;
