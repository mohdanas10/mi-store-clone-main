import React from "react";
import "../styles/VideoCard.css";

const playButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#FFFFFF"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
  </svg>
);

const VideoCard = ({ name, image, index }) => {
  return (
    <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
      <a href="#/">{playButton}</a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
