import { Container, Grid, Stack } from "@mui/material";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../models/recipe";

interface RecipeListProps {
  recipes: Recipe[];
  onDelete: (id: number) => void;
}

const RecipeList = ({ recipes, onDelete }: RecipeListProps) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <RecipeCard recipe={recipe} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
