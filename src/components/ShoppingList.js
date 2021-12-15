import React from "react";
import Item from "./Item";
import { useState } from 'react'

function ShoppingList({ items }) {
  // console.log(items);
  const [categoryState, setCategoryState] = useState("All")

  function handleFilter(e) {
    setCategoryState(e.target.value)
  }

  const newItemArray = items.filter((item) => {
    if(categoryState === "All") {
      return true;
    } else {
      return item.category === categoryState
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name= 'filter' onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        
      </div>
      <ul className="Items">
        {newItemArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
