import PageLayout from "./components/PageLayout";
import RecipeList from "./components/RecipeList";
import logoMiamMiam from "./assets/miammiam.png";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#e65100" },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <img src={logoMiamMiam} alt="Logo MiamMiam" />
        <PageLayout title="Miam Miam">
          <RecipeList></RecipeList>
        </PageLayout>
      </div>
    </ThemeProvider>
  );
};

export default App;
