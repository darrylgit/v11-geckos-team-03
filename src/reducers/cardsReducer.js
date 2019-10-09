export default (state = [], action) => {
  let currentCards = [...state];
  switch (action.type) {
    case "ADD_CARD":
      return [
        ...state,
        {
          title: action.payload.title,
          cardId: action.payload.cardId,
          listHome: action.payload.listHome,
          archived: false,
          checklist: [],
          description: ""
        }
      ];
    case "MOVE_CARD":
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          card.listHome = action.payload.newListHome;
        }
      });
      return currentCards;
    case "UPDATE_CARD_DESCRIPTION":
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          card.description = action.payload.descriptionInput;
        }
      });
      return currentCards;
    default:
      return state;
  }
};
