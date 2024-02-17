import { SET_THEME } from "../actions/actions";

const themeReducers = (state = "", action) => {
    console.log(action.payload)
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducers;
