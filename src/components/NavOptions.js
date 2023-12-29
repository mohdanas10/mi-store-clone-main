import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";
import { useLocation } from "react-router-dom";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitness,
  home,
  radio,
  accessories,
}) => {
  const { pathname } = useLocation();
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [radioToggle, setRadioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(false);
      setRadioToggle(false);
      setAccessoriesToggle(false);
    }
    if (pathname === "/miphones") {
      setMiPhoneToggle(true);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(false);
      setRadioToggle(false);
      setAccessoriesToggle(false);
    }
    if (pathname === "/redmiphones") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(true);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(false);
      setRadioToggle(false);
      setAccessoriesToggle(false);
    }
    if (pathname === "/tv") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(true);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(false);
      setRadioToggle(false);
      setAccessoriesToggle(false);
    }
    if (pathname === "/laptops") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(true);
      setFitnessToggle(false);
      setHomeToggle(false);
      setRadioToggle(false);
      setAccessoriesToggle(false);
    }
    if (pathname === "/fitness") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(true);
      setHomeToggle(false);
      setRadioToggle(false);
      setAccessoriesToggle(false);
    }
    if (pathname === "/home") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(true);
      setRadioToggle(false);
      setAccessoriesToggle(false);
    }
    if (pathname === "/radio") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(false);
      setRadioToggle(true);
      setAccessoriesToggle(false);
    }

    if (pathname === "/accessories") {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(false);
      setRadioToggle(false);
      setAccessoriesToggle(true);
    }
  }, [pathname]);

  return (
    <div className="navOptions">
      {miPhoneToggle
        ? miPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {redmiPhoneToggle
        ? redmiPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {tvToggle
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {laptopToggle
        ? laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {fitnessToggle
        ? fitness.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {homeToggle
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {radioToggle
        ? radio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;
