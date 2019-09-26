export default (state = [], action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, { title: action.payload }];
    case "ARCHIVE_LIST":
      return state;
    default:
      return state;
  }
};
