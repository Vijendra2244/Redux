import { USER_AUTH } from "../actions/actions";

const userReducer = (state = { username: "", loggedIn: false }, action) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        ...state,
        username: action.payload.username,
        loggedIn: action.payload.loggedIn,
      };
    default:
      return state;
  }
};

export default userReducer;
