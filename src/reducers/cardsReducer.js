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
    default:
      return state;
  }
};
