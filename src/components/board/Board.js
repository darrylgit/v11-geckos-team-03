import AddList from "./AddList";
import List from "./list/List";
import React from "react";
import { connect } from "react-redux";

class Board extends React.Component {
  // Iterate over every list in state, return the non-archived ones, and make and array of List components out of them
  listsArray = () =>
    this.props.lists
      .filter(list => !list.archived)
      .map(list => (
        <List key={list.listId} listTitle={list.title} listId={list.listId} />
      ));

  render() {
    return (
      <div className="board">
        {this.listsArray()}
        <AddList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists };
};

export default connect(mapStateToProps)(Board);
