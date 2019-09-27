export const addList = (title, listId) => {
  return {
    type: "ADD_LIST",
    payload: {
      title: title,
      listId: listId
    }
  };
};

export const archiveList = listId => {
  return {
    type: "ARCHIVE_LIST",
    payload: listId
  };
};
