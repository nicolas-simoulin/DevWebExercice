import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { NewRecipe, Recipe } from "./models/recipe";
import { useState } from "react";
import { recipes as initialRecipes } from "./data/recipes";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AddRecipePage from "./pages/AddRecipePage";

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

  function toggleFavorite(id: number) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout title="MiamMiam" favoritesCount={favorites.length} />
            }
          >
            <Route
              index
              element={
                <HomePage
                  valueSearchBar="Rechercher une recette"
                  onChangeSearchBar={filteredRecipes}
                  selectedIDFilter={}
                  onSelectFilter={filteredRecipes}
                  recipesList={recipes}
                  onDeleteList={deleteRecipe}
                  favoritesList={favorites}
                  onToggleList={toggleFavorite}
                  onResetFilter={resetFilter}
                />
              }
            />
            <Route
              path="recipes/new"
              element={<AddRecipePage onAdd={addRecipe} />}
            />
            <Route path="recipes/:id" element={<RecipeDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
