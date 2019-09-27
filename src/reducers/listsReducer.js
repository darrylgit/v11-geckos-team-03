export default (state = [], action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          title: action.payload.title,
          listId: action.payload.listId,
          archived: false
        }
      ];
    case "ARCHIVE_LIST":
      let currentLists = [...state];
      currentLists.forEach(list => {
        if (list.listId === action.payload) {
          list.archived = true;
        }
      });
      return currentLists;
    default:
      return state;
  }
};
