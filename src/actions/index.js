export const addList = (title, listId) => {
  return {
    type: "ADD_LIST",
    payload: {
      title,
      listId
    }
  };
};

export const archiveList = listId => {
  return {
    type: "ARCHIVE_LIST",
    payload: listId
  };
};

export const addCard = (title, cardId, listHome) => {
  return {
    type: "ADD_CARD",
    payload: {
      title,
      cardId,
      listHome
    }
  };
};

export const moveCard = (cardId, newListHome) => {
  return {
    type: "MOVE_CARD",
    payload: {
      cardId,
      newListHome
    }
  };
};

export const updateCardDescription = (cardId, descriptionInput) => {
  return {
    type: "UPDATE_CARD_DESCRIPTION",
    payload: {
      cardId,
      descriptionInput
    }
  };
};
