import { IconButton, Stack, Typography } from "@mui/material";
import type { Recipe } from "../models/recipe";
import { useState } from "react";
import { Remove } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  const [servings, setServings] = useState(recipe.servings);

  const decrement = () => setServings((prev) => prev - 1);
  const increment = () => setServings((prev) => prev + 1);
  return (
    <>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div>
        <strong>Préparation :</strong> {recipe.prepTime} min |
        <strong> Cuisson :</strong> {recipe.cookTime} min |
        <strong> Portions :</strong>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton
            onClick={decrement}
            disabled={servings <= 1}
            aria-label="Moins"
          >
            <Remove />
          </IconButton>
          <Typography>{servings} personnes</Typography>
          <IconButton onClick={increment} aria-label="Plus">
            <Add />
          </IconButton>
        </Stack>
      </div>

      <h3>Ingrédients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {(ingredient.quantity * servings).toFixed(1)} {ingredient.unit}{" "}
            {ingredient.name}
          </li>
        ))}
      </ul>

      <h3>Étapes</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
};

export default RecipeDetail;
