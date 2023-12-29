import React from "react";
import ProductReviewCard from "./ProductReviewCard";
import "../styles/ProductReviews.css";

const ProductReviews = ({ productReviews }) => {
  return (
    <div className="productReviews">
      {productReviews.map((item, index) => (
        <ProductReviewCard
          price={item.price}
          name={item.name}
          review={item.review}
          image={item.image}
          key={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
