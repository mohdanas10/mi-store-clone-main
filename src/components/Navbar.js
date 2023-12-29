import React from "react";
import "../styles/Navbar.css";
import data from "../data/data.json"; // Using json file as an object
import { Link, useLocation } from "react-router-dom";
// We could have imported Router in App.js so that we could be able use Links. Links are similar to anchor tags with href being "to"

const searchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const Navbar = () => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img id="logoImage" src={data.logo} alt="Not" />
        </Link>
      </div>
      <div className={splitLocation[1] === "miphones" ? "activeLink" : ""}>
        <Link className="navlinks" to="/miphones">
          Mi Phones
        </Link>
      </div>
      <div className={splitLocation[1] === "redmiphones" ? "activeLink" : ""}>
        <Link className="navlinks" to="/redmiphones">
          Redmi Phones
        </Link>
      </div>
      <div className={splitLocation[1] === "tv" ? "activeLink" : ""}>
        <Link className="navlinks" to="/tv">
          TV
        </Link>
      </div>
      <div className={splitLocation[1] === "laptops" ? "activeLink" : ""}>
        <Link className="navlinks" to="/laptops">
          Laptops
        </Link>
      </div>
      <div className={splitLocation[1] === "fitness" ? "activeLink" : ""}>
        <Link className="navlinks" to="/fitness">
          Fitness
        </Link>
      </div>
      <div className={splitLocation[1] === "home" ? "activeLink" : ""}>
        <Link className="navlinks" to="/home">
          Home
        </Link>
      </div>
      <div className={splitLocation[1] === "radio" ? "activeLink" : ""}>
        <Link className="navlinks" to="/radio">
          Radio
        </Link>
      </div>
      <div className={splitLocation[1] === "accessories" ? "activeLink" : ""}>
        <Link className="navlinks" to="/accessories">
          Accessories
        </Link>
      </div>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        {searchIcon}
      </div>
    </div>
  );
};

export default Navbar;
