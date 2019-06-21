export const SET_ELEMENT_FOCUS = "SET_ELEMENT_FOCUS";
export const SET_TO_LEFT = "SET_TO_LEFT";
export const SET_TEXT_BOX = "SET_TEXT_BOX";

const setFocusElement = (item, state) => {
  const newState = state.category.map(item => ({ ...item, focus: false })).filter(entry => entry.id !== item.id);
  return [item, ...newState].sort((first, second) => first.id - second.id);
};

const portfolioReducer = (state, action) => {
  switch (action.type) {
    case SET_ELEMENT_FOCUS:
      const updatedCategory = setFocusElement(action.dataset, state);
      return {
        ...state,
        category: updatedCategory
      };
    case SET_TO_LEFT:
      return {
        ...state,
        position: "flex-start"
      };
    case SET_TEXT_BOX:
      let setActive = false;
      if (state.active !== action.active) {
        setActive = action.active;
      }
      return {
        ...state,
        active: setActive
      };
    default:
      return state;
  }
};

export { portfolioReducer };
