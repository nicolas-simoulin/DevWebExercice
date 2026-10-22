import { Button, MenuItem, Rating, Stack, TextField } from "@mui/material";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

interface RecipeFormData {
  title: string;
  description: string;
  urlImage: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: number | null;
  category: string;
}
const RecipeForm = () => {
  const [form, setForm] = useState<RecipeFormData>({
    title: "",
    description: "",
    urlImage: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: null,
    category: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Stack component="form" spacing={2} onSubmit={handleSubmit}>
      <TextField
        label="Titre"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        multiline
        rows={3}
      />
      <TextField
        label="URLImage"
        name="urlImage"
        value={form.urlImage}
        onChange={handleChange}
        required
      />
      <TextField
        label="temp de préparation (min)"
        name="prepTime"
        type="number"
        value={form.prepTime}
        onChange={handleChange}
      />
      <TextField
        label="Temp de cuissons (min)"
        name="cookTime"
        type="number"
        value={form.cookTime}
        onChange={handleChange}
      />
      <TextField
        label="Nombre de personnes"
        name="servings"
        type="number"
        value={form.servings}
        onChange={handleChange}
      />
      <Rating
        name="difficulty"
        value={form.difficulty}
        onChange={(event, value) => setForm({ ...form, difficulty: value })}
      />
      <TextField
        select
        label="Catégorie"
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <MenuItem value="1">Entrée</MenuItem>
        <MenuItem value="2">Plat</MenuItem>
      </TextField>
      <Button type="submit" variant="contained">
        Créer la recette
      </Button>
    </Stack>
  );
};

export default RecipeForm;
