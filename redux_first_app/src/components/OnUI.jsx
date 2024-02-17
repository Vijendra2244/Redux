import React from "react";
import { useSelector } from "react-redux";

function OnUI() {
  const themeAction = useSelector((s) => s.theme);
  const addToCartAction = useSelector((s) => s.cart);
  const userAction = useSelector((s) => s.user);




  return (
    <div>
      {JSON.stringify(themeAction, null, 2)}
      <hr />
      {JSON.stringify(addToCartAction, null, 2)}
      <hr />
      {
        JSON.stringify(userAction,null,2)
      }
    </div>
  );
}

export default OnUI;
