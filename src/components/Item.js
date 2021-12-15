import React from "react";
import { useState } from 'react'


function Item({ name, category }) {
console.log(name, category)
  const [isAdded, addToCart] = useState(false)

  function handleClick() {
    addToCart((isAdded) => !isAdded)
  }

  return (
    <li className={isAdded ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}
              className="add">{isAdded ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
