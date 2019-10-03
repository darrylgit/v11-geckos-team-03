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
