import React from "react";
import "./recipe.css";
import FoodList from "../foodList/FoodList";

const Recipe = () => {
  return (
    <div className="recipe">
      <h1>Popular Food</h1>
      <small>
        we provide a variety of food and beverage recipes with high taste from
        famous chefs
      </small>
      <div>
        <FoodList />
      </div>
    </div>
  );
};

export default Recipe;
