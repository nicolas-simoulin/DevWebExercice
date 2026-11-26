import { useNavigate, useParams } from "react-router";
import RecipeForm from "../components/RecipeForm";
import type { NewRecipe } from "../models/recipe";
import { Button } from "@mui/material";

interface AddRecipePageProps {
  onAdd: (recipe: NewRecipe) => number;
}

const AddRecipePage = ({ onAdd }: AddRecipePageProps) => {
  const navigate = useNavigate();

  const handleAdd = (newRecipe: NewRecipe) => {
    const idRecipe = onAdd(newRecipe);
    navigate(`/recipes/${idRecipe}`);
  };
  return (
    <>
      <Button onClick={() => navigate(-1)}> Annuler </Button>
      <RecipeForm onAdd={handleAdd} />
    </>
  );
};

export default AddRecipePage;
