import * as React from "react";
import './ProductCard.css';

export default function ProductCard() {
  return (
    <div className="cardContainer">
      <div className="innerContainer">
        <div className="productTitle">
          HTML
          <br />
          for <br />
          Beginners
        </div>
        <button 
          className="addButton"
          aria-label="Add HTML for Beginners to cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}