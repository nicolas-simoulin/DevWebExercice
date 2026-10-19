import { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => setIsFavorite((prev) => !prev);

  return (
    <IconButton
      color="primary"
      aria-label={isFavorite ? "Retirer des favoris " : "Ajouter aux favoris"}
      onClick={handleClick}
    >
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};

export default FavoriteButton;
