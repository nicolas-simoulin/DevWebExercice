import type { Recipe } from "../models/recipe";
import RecipeDetail from "../components/RecipeDetail";

interface RecipeDetailPageProps {
  recipes: Recipe[];
}

const RecipeDetailPage = ({ recipes }: RecipeDetailPageProps) => {
  return <RecipeDetail recipe={recipes[0]} />;
};

export default RecipeDetailPage;
