import { type ReactNode } from "react";
import { Toolbar, AppBar, Container, Typography } from "@mui/material";
import { Favorite } from "@mui/icons-material";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  favoritesCount: number;
}

const PageLayout = ({ title, children, favoritesCount }: PageLayoutProps) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="h1">
            {title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <Favorite />
            {favoritesCount}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default PageLayout;
