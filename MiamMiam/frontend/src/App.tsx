import PageLayout from "./components/PageLayout";
import RecipeList from "./components/RecipeList";
import logoMiamMiam from "./assets/miammiam.png";
import {
  Button,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import RecipeForm from "./components/RecipeForm";
import type { NewRecipe, Recipe } from "./models/recipe";
import { use, useState } from "react";
import { recipes as initialRecipes } from "./data/recipes";
import { Category, NewReleases } from "@mui/icons-material";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

const theme = createTheme({
  palette: {
    primary: { main: "#e65100" },
  },
});

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [query, setQuery] = useState("");
  const [categoryID, setCategoryID] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredRecipes = recipes.filter((recipe) => {
    const text = `${recipe.title} ${recipe.description}`.toLowerCase();
    if (!text.includes(query.toLowerCase())) return false;
    if (categoryID !== null && recipe.categoryId !== categoryID) return false;
    return true;
  });

  const addRecipe = (NewRecipe: NewRecipe) => {
    const recipe: Recipe = { ...NewRecipe, id: Date.now(), authorId: 1 };
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (id: number) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const resetFilter = () => {
    setCategoryID(null);
    setQuery("");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <PageLayout title="Miam Miam">
          <img src={logoMiamMiam} alt="Logo MiamMiam" />
          <RecipeForm onAdd={addRecipe} />
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter selectedId={categoryID} onSelect={setCategoryID} />
          <Typography variant="h6" component="h1">
            il y a {filteredRecipes.length} recettes
          </Typography>
          {filteredRecipes.length === 0 ? (
            <>
              <Typography variant="h6" component="h1">
                aucune recette
              </Typography>
              <Button onClick={resetFilter}>reinitialiser filtres</Button>
            </>
          ) : (
            <RecipeList recipes={filteredRecipes} onDelete={deleteRecipe} />
          )}
        </PageLayout>
      </div>
    </ThemeProvider>
  );
};

export default App;
