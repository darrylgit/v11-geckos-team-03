import AddCard from "./AddCard";
import Card from "./Card";
import React from "react";

class List extends React.Component {
  state = {
    cards: [],
    spans: 13
  };

  // Element height handlers. The Lists' height is based on CSS grid spans, so when the Lists' height changes, we have to set a new value for the spans.
  headingRef = React.createRef();
  cardsRef = React.createRef();

  setSpansUpdate = addCardHeight => {
    // The height of the List is the sum of the heights of its heading, its cards div and the AddCard component. Since we have to create a ref for AddCard directly on that component, we make this function a prop of AddCard, retrieve the height from inside that AddCard, and pass that height as an argument to this function.
    const height =
      this.headingRef.current.clientHeight +
      this.cardsRef.current.clientHeight +
      addCardHeight;

    const spans = Math.ceil(height / 10) + 1; // +1 to ensure a minimum bottom margin of one span height for the List

    this.setState({ spans: spans });
  };

  setSpansUpdateForCard = addCardHeight => {
    // When adding a card, the cards div's ref gives us its height before the card has been added. Therefore, before the card is added, we need to predict what that div's height will be and set the List's height accordingly.
    let cardsHeight;
    const cardsDivHeightWhenEmpty = 10; // TODO: don't hardcode this value
    const heightOfOneCard = 45; // TODO: don't hardcode this value

    if (this.cardsRef.current.clientHeight === cardsDivHeightWhenEmpty) {
      cardsHeight = heightOfOneCard;
    } else {
      cardsHeight = this.cardsRef.current.clientHeight + heightOfOneCard;
    }

    const height =
      this.headingRef.current.clientHeight + cardsHeight + addCardHeight;

    const spans = Math.ceil(height / 10) + 1;

    this.setState({ spans: spans });
  };

  // Event handler for when user clicks the remove button
  removeList = () => {
    this.props.remove(this.props.listTitle);
  };

  // Add new card handlers
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
      return <Card key={card.title} cardTitle={card.title} />;
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
