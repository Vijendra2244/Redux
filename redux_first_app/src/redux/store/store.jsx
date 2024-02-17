import { createStore, combineReducers } from "redux";
import themeReducers from "../reducers/themeReducer";
import addToCartReducer from "../reducers/addToCartReducer";
import userReducer from "../reducers/userReducer";

const rootReducers = combineReducers({
  theme: themeReducers,
  cart:addToCartReducer,
  user:userReducer
});

const store = createStore(rootReducers);

export default store;
