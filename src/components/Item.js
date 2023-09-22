
import React, { useState } from "react";

function Item({ name, category }) {
  const [Data, setData] = useState(name);

  function ActionAdd() {
    setData(!Data);
  }

  return (
    <li className={Data ? '' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={ActionAdd} >
       {Data ? "Add to Cart " : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
