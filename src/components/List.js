import AddCard from "./AddCard";
import Card from "./Card";

import React from "react";

class List extends React.Component {
  state = { cards: [] };

  removeList = () => {
    this.props.remove(this.props.listTitle);
  };

  Card = function(title) {
    this.title = title;
  };

  addNewCard = title => {
    let currentCards = [...this.state.cards];
    currentCards.push(new this.Card(title));
    this.setState({ cards: currentCards });
  };

  // Function to create Card components from state
  cardsArray = () =>
    this.state.cards.map(card => {
      return (
        <Card
          key={card.title}
          cardTitle={card.title}
          //remove={this.removeList}
        />
      );
    });

  render() {
    return (
      <div className="list">
        <div className="list__remove" onClick={this.removeList}>
          &times;
        </div>
        <h2 className="list__heading">{this.props.listTitle}</h2>
        <div className="list__cards">{this.cardsArray()}</div>
        <AddCard onSubmit={this.addNewCard} />
      </div>
    );
  }
}

export default List;
