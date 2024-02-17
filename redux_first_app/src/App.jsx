import { Provider, useDispatch } from "react-redux";
import "./App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllRotues from "./AllRotues/AllRotues";
import { SET_THEME } from "./redux/actions/actions";
import store from "./redux/store/store";
import Theme from "./components/Theme";

function App() {
  return (
    <>
      <Provider store={store}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            padding: "0.4rem",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          <Link style={{ textDecoration: "none" }} to="/addToCart">
            Add to cart
          </Link>
          <Link style={{ textDecoration: "none" }} to="/user">
            User
          </Link>
          <Theme/>
        </div>

        <AllRotues />
      </Provider>
    </>
  );
}

export default App;
