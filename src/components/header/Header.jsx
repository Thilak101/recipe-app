import React from "react";
import "./header.css";
import { Button } from "@mui/material";
import food from "../../assets/food.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__title">
          Let's Start 
          Cooking With 
          Popular Recipes 
        </h1>
        <small>
          Want to learn cook confused how to start? No need to worry again?
        </small>
        <div className="header__buttons">
          <Button variant="contained" color="success">
            Get Started
          </Button>
          <Button variant="text" style={{ color: "green" }}>
            Explore Menu
          </Button>
        </div>
      </div>

      <div className="header__right">
        <img src={food} alt="food" />
      </div>
    </div>
  );
};

export default Header;
