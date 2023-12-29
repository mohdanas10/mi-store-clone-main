import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";

const HotAccessoriesMenu = () => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <div className="hotAccessoriesMenu">
      <div exact className={splitLocation[1] === "" ? "active" : ""}>
        <Link className="hotAccessoriesLink" to="/">
          Music Store
        </Link>
      </div>
      <div className={splitLocation[1] === "smartDevices" ? "active" : ""}>
        <Link className="hotAccessoriesLink" to="/smartDevices">
          Smart Devices
        </Link>
      </div>
      <div className={splitLocation[1] === "home" ? "active" : ""}>
        <Link className="hotAccessoriesLink" to="/home">
          Home
        </Link>
      </div>
      <div className={splitLocation[1] === "lifestyle" ? "active" : ""}>
        <Link className="hotAccessoriesLink" to="/lifestyle">
          Lifestyle
        </Link>
      </div>
      <div className={splitLocation[1] === "mobileAccessories" ? "active" : ""}>
        <Link className="hotAccessoriesLink" to="/mobileAccessories">
          Mobile Accessories
        </Link>
      </div>
    </div>
  );
};

export default HotAccessoriesMenu;
