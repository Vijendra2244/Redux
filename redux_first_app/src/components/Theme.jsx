import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_THEME } from "../redux/actions/actions";
import { Link } from "react-router-dom";

function Theme() {
  const [theme, setTheme] = useState("light-mode");
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    dispatch({ type: SET_THEME, payload: newTheme });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <button onClick={toggleTheme}>
        {theme == "light-mode" ? "dark-mode" : "light-mode"}
      </button>
    </div>
  );
}

export default Theme;
