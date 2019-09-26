export const addList = title => {
  return {
    type: "ADD_LIST",
    payload: title
  };
};

export const archiveList = title => {
  return {
    type: "ARCHIVE_LIST",
    payload: title
  };
};
