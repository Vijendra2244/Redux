import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_AUTH } from "../redux/actions/actions";
import { useNavigate } from "react-router-dom";

function User() {
  const [username, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({
      type: USER_AUTH,
      payload: { username: username, loggedIn: true },
    });
    alert(`${username} login successfully`);
    setUserName("");
    navigate("/");
  };
  const handleLogout = () => {
    dispatch({
      type: USER_AUTH,
      payload: { username: "", loggedIn: false },
    });
    alert(`logout successfully`);

    navigate("/");
  };
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        width: "30%",
        margin: "2rem auto",
        justifyContent: "space-evenly",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />

      <button style={{ width: "20%", margin: "auto" }} onClick={handleLogin}>
        Login
      </button>
      <button style={{ width: "20%", margin: "auto" }} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default User;
