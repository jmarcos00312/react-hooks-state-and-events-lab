import React, { useState } from "react";

function Item({ name, category }) {
  const [items, setItems] = useState(false)

  const addedToCart = () => {
    setItems(!items)
  }
  return (
    <li className={"" + (items ? "in-cart" : "")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addedToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
