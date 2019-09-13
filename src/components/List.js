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
  }

  // Element height handlers
  componentDidMount() {
    //this.setSpansInit();
    //this.listRef.current.addEventListener("load", this.setSpans);
    this.listRef.current.addEventListener("submit", this.setSpansUpdate);
  }

  setSpansInit = () => {
    const height = this.listRef.current.clientHeight;
    console.log(height);

    const spans = Math.ceil(height / 10);
    console.log(spans);

    this.setState({ spans: spans });
  };

  setSpansUpdate = () => {
    const height = this.listRef.current.clientHeight;
    console.log(height);

    const spans = Math.ceil(height / 10) + 4;
    console.log(spans);

    this.setState({ spans: spans });
  };

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
        <h2 className="list__heading">{this.props.listTitle}</h2>
        <div className="list__cards">{this.cardsArray()}</div>
        <AddCard onSubmit={this.addNewCard} />
      </div>
    );
  }
}

export default List;
