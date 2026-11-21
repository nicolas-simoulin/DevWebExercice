import RecipeForm from "../components/RecipeForm";
import type { NewRecipe } from "../models/recipe";

interface AddRecipePageProps {
  onAdd: (recipe: NewRecipe) => void;
}

const AddRecipePage = ({ onAdd }: AddRecipePageProps) => {
  return <RecipeForm onAdd={onAdd} />;
};

export default AddRecipePage;
