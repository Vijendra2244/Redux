import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../redux/actions/actions";

function AddToCart() {
  const cartData = useSelector((data) => data.cart);
  const dispatch = useDispatch();
  const addToCart = () => {
    const item = document.getElementById("item");
    dispatch({
      type: ADD_TO_CART,
      payload: item.value,
    });
    item.value = "";
  };
  console.log(cartData, "cart data");
  return (
    <>
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
        <input type="text" name="item" id="item" />
        <button onClick={addToCart}>Add To Cart</button>
      </div>
      {cartData.map((ele, index) => (
        <div key={index}>
          <p>{ele}</p>
        </div>
      ))}
    </>
  );
}

export default AddToCart;
