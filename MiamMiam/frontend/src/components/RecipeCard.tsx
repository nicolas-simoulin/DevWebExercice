import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Chip,
  Rating,
} from "@mui/material";
import type { Recipe } from "../models/recipe";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import TimerIcon from "@mui/icons-material/Timer";
import FavoriteButton from "./FavoriteButton";
import RecipeDetail from "./RecipeDetail";

interface RecipeCardProps {
  onDelete: (id: number) => void;
  recipe: Recipe;
}

const RecipeCard = ({ recipe, onDelete }: RecipeCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={recipe.imageUrl}
        alt={recipe.title}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {recipe.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {<TimerIcon />}
          {recipe.prepTime + recipe.cookTime} min
        </Typography>
        {recipe.tags.map((tag) => (
          <Chip key={tag} label={tag} color="primary" size="small" />
        ))}
        <Rating
          icon={<SoupKitchenIcon />}
          emptyIcon={<SoupKitchenIcon />}
          value={recipe.difficulty}
          max={5}
          readOnly
        />
      </CardContent>
      <CardActions>
        <FavoriteButton />
        <Button size="small">Voir la recette</Button>
        <Button onClick={() => onDelete(recipe.id)}>Supprimer</Button>
      </CardActions>
      <RecipeDetail recipe={recipe} />
    </Card>
  );
};

export default RecipeCard;
