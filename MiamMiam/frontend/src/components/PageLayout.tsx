import { type ReactNode } from "react";
import { Toolbar, AppBar, Container, Typography } from "@mui/material";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="h1">
          {title}
        </Typography>
      </Toolbar>
      <Container maxWidth="lg">{children}</Container>
    </AppBar>
  );
};

export default PageLayout;
