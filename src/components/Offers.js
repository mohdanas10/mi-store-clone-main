import React from "react";
import Offer from "./Offer";
import "../styles/Offers.css";

// Return will be used if curly braces are used instead of round braces in arrow function of offer.map

const Offers = ({ offer }) => {
  return (
    <div className="offersSection">
      {offer.map((item, index) => (
        <Offer
          key={item.image}
          index={index}
          src={item.image}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Offers;
