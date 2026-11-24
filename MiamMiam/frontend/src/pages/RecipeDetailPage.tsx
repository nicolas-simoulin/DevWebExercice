import type { Recipe } from "../models/recipe";
import RecipeDetail from "../components/RecipeDetail";
import { Link, Route, useParams } from "react-router";
import NotFoundPage from "./NotFoundPage";
import { Button, Typography } from "@mui/material";

interface RecipeDetailPageProps {
  recipes: Recipe[];
}

const RecipeDetailPage = ({ recipes }: RecipeDetailPageProps) => {
  const { id } = useParams();

  const recipeID = Number(id);

  const recipe = recipes.find((r) => r.id === recipeID);

  if (!recipe) {
    return (
      <>
        <Typography> Recette Introuvable</Typography>
        <Button component={Link} to="/">
          {" "}
          Retour aux recettes{" "}
        </Button>
      </>
    );
  }

  return <RecipeDetail recipe={recipe} />;
};

export default RecipeDetailPage;
