import AddList from "./AddList";
import List from "./list/List";
import React from "react";
import { connect } from "react-redux";

class Board extends React.Component {
  //state = { lists: [] };

  // List constructor function
  List = function(title) {
    this.title = title;
    this.cards = [];
  };

  // Function to create List components from state
  listsArray = () =>
    this.props.lists.map(list => {
      if (!list.archived) {
        return (
          <List key={list.listId} listTitle={list.title} listId={list.listId} />
        );
      }
    });

  render() {
    return (
      <div className="board">
        {this.listsArray()}
        <AddList onSubmit={this.onListSubmit}></AddList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists };
};

export default connect(mapStateToProps)(Board);
