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

interface RecipeCardProps {
  title: string;
  imageUrl: string;
  duration: number;
  difficulty: number;
  description?: string;
  tags: string;
}
const RecipeCard = ({
  title,
  imageUrl,
  duration,
  difficulty,
  description,
  tags,
}: RecipeCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {duration} min
        </Typography>
        <Chip label={tags} color="primary" size="small" />
      </CardContent>
      <CardActions>
        <Button size="small">Voir la recette</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
