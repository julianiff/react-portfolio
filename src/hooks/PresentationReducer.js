export const SET_CURRENT_ITEM = "SET_CURRENT_ITEM";

const PresentationReducer = (state, action) => {
  if (action.type === SET_CURRENT_ITEM) {
    return {
      ...state,
      current: action.current
    };
  } else {
    return state;
  }
};

export { PresentationReducer };
