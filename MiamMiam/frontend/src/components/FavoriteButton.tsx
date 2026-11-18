import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle(): void;
}

const FavoriteButton = ({ isFavorite, onToggle }: FavoriteButtonProps) => {
  return (
    <IconButton
      color="primary"
      aria-label={isFavorite ? "Retirer des favoris " : "Ajouter aux favoris"}
      onClick={onToggle}
    >
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default FavoriteButton;
