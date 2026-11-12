import PageLayout from "./components/PageLayout";
import RecipeList from "./components/RecipeList";
import logoMiamMiam from "./assets/miammiam.png";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import RecipeForm from "./components/RecipeForm";
import type { NewRecipe, Recipe } from "./models/recipe";
import { use, useState } from "react";
import { recipes as initialRecipes } from "./data/recipes";
import { NewReleases } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: { main: "#e65100" },
  },
});

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [query, setQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  const addRecipe = (NewRecipe: NewRecipe) => {
    const recipe: Recipe = { ...NewRecipe, id: Date.now(), authorId: 1 };
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <PageLayout title="Miam Miam">
          <img src={logoMiamMiam} alt="Logo MiamMiam" />
          <RecipeForm onAdd={addRecipe} />
          <RecipeList recipes={filteredRecipes} onDelete={deleteRecipe} />
        </PageLayout>
      </div>
    </ThemeProvider>
  );
};

export default App;
