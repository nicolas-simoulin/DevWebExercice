import { useNavigate, useParams } from "react-router";
import RecipeForm from "../components/RecipeForm";
import type { NewRecipe } from "../models/recipe";

interface AddRecipePageProps {
  onAdd: (recipe: NewRecipe) => number;
}

const AddRecipePage = ({ onAdd }: AddRecipePageProps) => {
  const navigate = useNavigate();

  const handleAdd = (newRecipe: NewRecipe) => {
    const idRecipe = onAdd(newRecipe);
    navigate(`/recipes/${idRecipe}`);
  };
  return <RecipeForm onAdd={handleAdd} />;
};

export default AddRecipePage;
