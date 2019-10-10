export default (state = [], action) => {
  let currentCards = [...state];
  //const { cardId } = action.payload;
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
    case "ADD_CHECKLIST_ITEM":
      const { checklistItemTitle, checklistItemId, checked } = action.payload;
      const newItem = { checklistItemTitle, checklistItemId, checked };
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          card.checklist.push(newItem);
        }
      });
      return currentCards;
    case "CHECKLIST_CHECK":
      console.log("CHECKLIST_CHECK");
      currentCards.forEach(card => {
        if (card.cardId === action.payload.cardId) {
          console.log("found the card");
          console.log(action.payload.checklistItemId);
          card.checklist.forEach(item => {
            if (item.checklistItemId === action.payload.checklistItemId) {
              console.log("found the item");
              item.checked = !item.checked;
            }
          });
        }
      });
      return currentCards;
    default:
      return state;
  }
};
