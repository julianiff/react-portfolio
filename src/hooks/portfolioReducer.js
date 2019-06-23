export const SET_ELEMENT_FOCUS = "SET_ELEMENT_FOCUS";
export const SET_TO_LEFT = "SET_TO_LEFT";
export const SET_TEXT_BOX = "SET_TEXT_BOX";
export const SET_AUTOMATIC_NEXT = "SET_AUTOMATIC_NEXT";

const setFocusElementFromItem = (item, state) => {
  const newState = state.category.map(item => ({ ...item, focus: false })).filter(entry => entry.id !== item.id);
  return [item, ...newState].sort((first, second) => first.id - second.id);
};

const setFocusFromId = (id, state) => {
  return state.category.map(item => {
    if (item.id === id) {
      item.focus = true;
      return item;
    } else {
      item.focus = false;
      return item;
    }
  });
};


const portfolioReducer = (state, action) => {
  switch (action.type) {
    case SET_ELEMENT_FOCUS:
      return {
        ...state,
        category: setFocusElementFromItem(action.dataset, state),
        isInAutomatic: false
      };
    case SET_AUTOMATIC_NEXT:
      return {
        ...state,
        category: setFocusFromId(action.id, state),
        active: action.id
      };
    case SET_TO_LEFT:
      return {
        ...state,
        position: "flex-start"
      };
    case SET_TEXT_BOX:
      if (state.active === action.active) {
        //hacky,
        return {
          ...state,
          active: false
        };
      } else {
        return {
          ...state,
          active: action.active
        };
      }

    default:
      return state;
  }
};

export { portfolioReducer };
