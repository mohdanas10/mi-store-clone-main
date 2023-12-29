import React from "react";
import "../styles/StarProduct.css";

const StarProduct = ({ starProduct }) => {
  return (
    <div className="starProduct">
      <div>
        <a className="first" href={starProduct[0].url}>
          <img src={starProduct[0].image} alt="1st product" />
        </a>
      </div>
      <div>
        <a className="second" href={starProduct[1].url}>
          <img src={starProduct[1].image} alt="2nd product" />
        </a>
        <a className="second" href={starProduct[2].url}>
          <img src={starProduct[2].image} alt="3rd product" />
        </a>
        <a className="fourth" href={starProduct[3].url}>
          <img src={starProduct[3].image} alt="4th product" />
        </a>
      </div>
    </div>
  );
};

export default StarProduct;
