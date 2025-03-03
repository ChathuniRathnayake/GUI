import React from "react";
import "./ProductCard.css";

export default function ProductCard({ course, onAddToCart }) {
  //const { title, image, description, price } = course;

  return (
    <div className="productCard">
      <img src={course.image_url} alt={course.name} className="productImage" />
      <h3 className="productTitle">{course.name}</h3>
      <p className="productDescription">{course.description}</p>
      <p className="productPrice">${course.price}</p>
      <button className="addToCartBtn" onClick={() => onAddToCart(course)}>
        Add to Cart
      </button>
    </div>
  );
}
