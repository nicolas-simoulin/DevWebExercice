import SearchBar from "../components/SearchBar";
import logoMiamMiam from "../assets/miammiam.png";
import type { Recipe } from "../models/recipe";
import CategoryFilter from "../components/CategoryFilter";
import { Typography } from "@mui/material";

interface HomePageProps {
  valueSearchBar: string;
  onChangeSearchBar: (value: string) => void;
  selectedIDFilter: number | null;
  onSelectFilter: (categoryId: number | null) => void;
  recipesList: Recipe[];
  onDeleteList: (id: number) => void;
  favoritesList: number[];
  onToggleList: (id: number) => void;
  onResetFilter: () => void;
}

const HomePage = ({
  valueSearchBar,
  onChangeSearchBar,
  selectedIDFilter,
  onSelectFilter,
  recipesList,
  onDeleteList,
  favoritesList,
  onToggleList,
  onResetFilter,
}: HomePageProps) => {
  return (
    <>
      <img src={logoMiamMiam} alt="Logo MiamMiam" />
      <SearchBar value={valueSearchBar} onChange={onChangeSearchBar} />
      <CategoryFilter selectedId={selectedIDFilter} onSelect={onSelectFilter} />
      <Typography variant="h6" component="h1">
        il y a {}
      </Typography>
    </>
  );
};
