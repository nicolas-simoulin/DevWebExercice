import PageLayout from "./components/PageLayout";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div className="app">
      <PageLayout 
      title="Miam Miam">
        <RecipeList></RecipeList>
      </PageLayout>
    </div>
  );
};

export default App;
