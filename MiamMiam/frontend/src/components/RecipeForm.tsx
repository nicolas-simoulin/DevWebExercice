import {
  Button,
  IconButton,
  MenuItem,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import type { NewRecipe } from "../models/recipe";
import { categories } from "../data/categories";

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

interface IngredientInput {
  key: number;
  name: string;
  quantity: string;
  unit: string;
}

type IngredientField = "name" | "quantity" | "unit";

interface StepsInput {
  key: number;
  step: string;
}

type StepsField = "step";

interface RecipeFormProps {
  onAdd: (recipe: NewRecipe) => void;
}

const RecipeForm = ({ onAdd }: RecipeFormProps) => {
  const [submitted, setSubmmitted] = useState(false);

  const [ingredients, setIngredients] = useState<IngredientInput[]>([]);

  const [steps, setSteps] = useState<StepsInput[]>([]);

  {
    /*INGREDIENT*/
  }

  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { key: Date.now(), name: "", quantity: "", unit: "g" },
    ]);
  };

  const removeIngredient = (key: number) =>
    setIngredients(ingredients.filter((ingredient) => ingredient.key !== key));

  const updateIngredient = (
    key: number,
    field: IngredientField,
    value: string,
  ) =>
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.key === key ? { ...ingredient, [field]: value } : ingredient,
      ),
    );

  {
    /*STEP*/
  }

  const addStep = () => {
    setSteps([...steps, { key: Date.now(), step: "" }]);
  };

  const removeStep = (key: number) =>
    setSteps(steps.filter((step) => step.key !== key));

  const updateStep = (key: number, field: StepsField, value: string) =>
    setSteps(
      steps.map((step) =>
        step.key === key ? { ...step, [field]: value } : step,
      ),
    );

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
  const hasValidIngredient = ingredients.some(
    (ingredient) =>
      ingredient.name.trim() !== "" && Number(ingredient.quantity) > 0,
  );
  const ingredientsError = !hasValidIngredient;
  const hasValidStep = steps.some((step) => step.step.trim() !== "");
  const stepsError = !hasValidStep;
  const isValid =
    !titleError &&
    !prepTimeError &&
    !cookTimeError &&
    !categoryError &&
    !servingsError &&
    !ingredientsError &&
    !stepsError;

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
    onAdd({
      title: form.title,
      description: form.description,
      imageUrl: form.urlImage,
      prepTime: Number(form.prepTime),
      cookTime: Number(form.cookTime),
      servings: Number(form.servings),
      difficulty: Number(form.difficulty),
      categoryId: Number(form.category),
      tags: [],
      ingredients: ingredients.map((ingredient) => ({
        name: ingredient.name,
        quantity: Number(ingredient.quantity),
        unit: ingredient.unit,
      })),
      steps: steps.map((step) => step.step),
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
    setIngredients([]);
    setSteps([]);
    setSubmmitted(false);
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
        {categories.map((category) => (
          <MenuItem value={category.id}>{category.name} </MenuItem>
        ))}
      </TextField>

      {/*INGREDIENT*/}

      {ingredients.map((ingredient) => (
        <Stack key={ingredient.key} direction="row" spacing={1}>
          <TextField
            label="Ingredient"
            value={ingredient.name}
            onChange={(e) =>
              updateIngredient(ingredient.key, "name", e.target.value)
            }
          />
          <TextField
            label="Quantité"
            type="number"
            value={ingredient.quantity}
            onChange={(e) =>
              updateIngredient(ingredient.key, "quantity", e.target.value)
            }
          />
          <TextField
            label="Unité"
            value={ingredient.unit}
            onChange={(e) =>
              updateIngredient(ingredient.key, "unit", e.target.value)
            }
          />
          <IconButton
            onClick={() => removeIngredient(ingredient.key)}
            aria-label="Retirer"
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
      {submitted && ingredientsError && (
        <Typography color="error" variant="body2">
          Veuillez ajouter au moins un ingrédient valide.
        </Typography>
      )}

      <Button onClick={addIngredient}>Ajouter un ingrédient</Button>

      {/*STEP*/}

      {steps.map((step) => (
        <Stack key={step.key} direction="row" spacing={1}>
          <TextField
            label="Etape"
            type="string"
            value={step.step}
            onChange={(e) => updateStep(step.key, "step", e.target.value)}
          />
          <IconButton onClick={() => removeStep(step.key)} aria-label="Retirer">
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
      {submitted && stepsError && (
        <Typography color="error" variant="body2">
          Veuillez ajouter au moins une étape valide.
        </Typography>
      )}
      <Button onClick={addStep}>Ajouter une étape</Button>
      <Button type="submit" variant="contained">
        Créer la recette
      </Button>
    </Stack>
  );
};

export default RecipeForm;
