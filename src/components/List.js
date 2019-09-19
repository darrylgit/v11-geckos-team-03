import AddCard from "./AddCard";
import Card from "./Card";

import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      spans: 13
    };
    this.listRef = React.createRef();
    this.headingRef = React.createRef();
    this.cardsRef = React.createRef();
  }

  // Element height handlers
  setSpansUpdate = addCardHeight => {
    const height =
      this.headingRef.current.clientHeight +
      this.cardsRef.current.clientHeight +
      addCardHeight;

    console.log("heading height is " + this.headingRef.current.clientHeight);
    console.log("cards height is " + this.cardsRef.current.clientHeight);
    console.log("addCard height is " + addCardHeight);
    console.log("total height is " + height);

    const spans = Math.ceil(height / 10) + 1;

    this.setState({ spans: spans });
  };

  setSpansUpdateForCard = addCardHeight => {
    let cardsHeight;
    if (this.cardsRef.current.clientHeight === 10) {
      cardsHeight = 45;
    } else {
      cardsHeight = this.cardsRef.current.clientHeight + 45;
    }

    const height =
      this.headingRef.current.clientHeight + cardsHeight + addCardHeight;

    console.log("heading height is " + this.headingRef.current.clientHeight);
    console.log("cards height is " + cardsHeight);
    console.log("addCard height is " + addCardHeight);
    console.log("total height is " + height);

    const spans = Math.ceil(height / 10) + 1;

    this.setState({ spans: spans });
  };

  setSpansTruncate = () => {
    let spans = this.state.spans;

    spans -= 4;

    this.setState({ spans: spans });
  };

  removeList = () => {
    this.props.remove(this.props.listTitle);
  };

  // Add new card
  Card = function(title) {
    this.title = title;
  };

  addNewCard = title => {
    let currentCards = [...this.state.cards];
    currentCards.push(new this.Card(title));
    this.setState({ cards: currentCards });
  };

  cardsArray = () =>
    this.state.cards.map(card => {
      return (
        <Card
          key={card.title}
          cardTitle={card.title}
          //remove={this.removeCard}
        />
      );
    });

  render() {
    return (
      <div
        className="list"
        ref={this.listRef}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <div className="list__remove" onClick={this.removeList}>
          &times;
        </div>
        <h2 className="list__heading" ref={this.headingRef}>
          {this.props.listTitle}
        </h2>
        <div className="list__cards" ref={this.cardsRef}>
          {this.cardsArray()}
        </div>
        <AddCard
          onSubmit={this.addNewCard}
          setSpansUpdate={this.setSpansUpdate}
          setSpansUpdateForCard={this.setSpansUpdateForCard}
        />
      </div>
    );
  }
}

export default List;
