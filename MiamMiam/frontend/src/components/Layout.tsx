import {
  Toolbar,
  AppBar,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Link, Outlet } from "react-router";

interface LayoutProps {
  title: string;
  favoritesCount: number;
}

const Layout = ({ title, favoritesCount }: LayoutProps) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
          <Button component={Link} to="/" color="inherit">
            {" "}
            Recettes
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button component={Link} to="/recipes/new" color="inherit">
            {" "}
            Ajouter
          </Button>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Favorite />
            {favoritesCount}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 4 }}>
        <Outlet /> {/* HomePage, AddRecipePage ou RecipeDetailPage */}
      </Container>
    </>
  );
};

export default Layout;
