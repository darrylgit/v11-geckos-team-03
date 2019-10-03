export default (state = [], action) => {
  switch (action.type) {
    case "ADD_CARD":
      return [
        ...state,
        {
          title: action.payload.title,
          cardId: action.payload.cardId,
          listHome: action.payload.listHome,
          archived: false
        }
      ];
    case "MOVE_CARD":
      let currentCards = [...state];
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          card.listHome = action.payload.newListHome;
        }
      });
      return currentCards;
    default:
      return state;
  }
};
