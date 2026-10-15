import { Container, Grid, Stack } from "@mui/material";
import { recipes } from "../data/recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {recipes.map((recipe) => (
          <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
