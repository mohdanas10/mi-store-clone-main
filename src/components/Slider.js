// import { Carousel } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing bootstrap CSS library

const Slider = ({ start }) => {
  return (
    <Carousel className="slider" fade>
      {start.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
