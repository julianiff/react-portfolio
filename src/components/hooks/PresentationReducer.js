export const SET_NEW_CURRENT_ENTRY = "SET_NEW_CURRENT_ENTRY";


export const updateEntry = (current) => ({
  type: SET_NEW_CURRENT_ENTRY,
  current
});


const PresentationReducer = (state, action) => {
  if (action.type === SET_NEW_CURRENT_ENTRY) {
    return {
      ...state,
      current: action.current
    };
  } else {
    return state;
  }
};

export { PresentationReducer };
