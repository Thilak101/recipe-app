import React, { useState, useEffect } from "react";
import "./foodList.css";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

const FoodList = () => {
  const [foods, setFoods] = useState(null);

  const baseURL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=100`;

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(baseURL)
        .then((response) => {
          setFoods(response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  // console.log(foods.extendedIngredients);

  return (
    foods && (
      <div className="card">
        {
        foods.recipes.map((food) => {
          return (
            <div className="card__content">
              <Card sx={{ maxWidth: 350 }}>
                <CardHeader
                  title={food.title}
                  subheader={"Diet associated with " + food.diets}
                ></CardHeader>
                <CardMedia
                  component={"img"}
                  height={"194"}
                  image={food.image}
                />
                <CardContent>
                  {food.extendedIngredients.map((ingredient) => {
                    return `Ingredients: ${ingredient.name},${" "}`;
                  })}
                </CardContent>
              </Card>
            </div>
          );
        })
        }
      </div>
    )
  );
};

export default FoodList;
