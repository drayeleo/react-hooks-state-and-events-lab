import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  
  const liClass = isInCart ? "in-cart" : "";
  const buttonClass = isInCart ? "remove" : "add";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={() => setIsInCart(!isInCart)}>{buttonText}</button>
    </li>
  );
}

export default Item;
