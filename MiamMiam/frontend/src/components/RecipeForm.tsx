import { Button, MenuItem, Rating, Stack, TextField } from "@mui/material";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";

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
  const [submitted, setSubmmitted] = useState(false);

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

  const titleError = form.title.trim().length < 3;
  const prepTimeError = form.prepTime === "" || Number(form.prepTime) < 0;
  const cookTimeError = form.cookTime === "" || Number(form.cookTime) < 0;
  const servingsError = form.servings === "" || Number(form.servings) < 1;
  const categoryError = form.category === "";
  const isValid =
    !titleError &&
    !prepTimeError &&
    !cookTimeError &&
    !categoryError &&
    !servingsError;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmmitted(true);
    if (!isValid) return;
    console.log({
      ...form,
      prepTime: Number(form.prepTime),
      cookTime: Number(form.cookTime),
      servings: Number(form.servings),
    });
    setForm({
      title: "",
      description: "",
      urlImage: "",
      prepTime: "",
      cookTime: "",
      servings: "",
      difficulty: null,
      category: "",
    });
  };

  return (
    <Stack component="form" spacing={2} onSubmit={handleSubmit}>
      <TextField
        label="Titre"
        name="title"
        value={form.title}
        onChange={handleChange}
        required
        error={submitted && titleError}
        helperText={submitted && titleError ? "Au moin 3 caractères" : ""}
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
        error={submitted && prepTimeError}
        helperText={submitted && prepTimeError ? "temp positifs ou nuls" : ""}
      />
      <TextField
        label="Temp de cuissons (min)"
        name="cookTime"
        type="number"
        value={form.cookTime}
        onChange={handleChange}
        error={submitted && cookTimeError}
        helperText={submitted && cookTimeError ? "temp positifs ou nuls" : ""}
      />
      <TextField
        label="Nombre de personnes"
        name="servings"
        type="number"
        value={form.servings}
        onChange={handleChange}
        error={submitted && servingsError}
        helperText={
          submitted && servingsError ? "nombre de personne positifs nuls" : ""
        }
      />
      <Rating
        name="difficulty"
        value={form.difficulty}
        icon={<SoupKitchenIcon />}
        emptyIcon={<SoupKitchenIcon />}
        onChange={(event, value) => setForm({ ...form, difficulty: value })}
      />
      <TextField
        select
        label="Catégorie"
        name="category"
        value={form.category}
        onChange={handleChange}
        error={submitted && categoryError}
        helperText={submitted && categoryError ? "category nul" : ""}
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
