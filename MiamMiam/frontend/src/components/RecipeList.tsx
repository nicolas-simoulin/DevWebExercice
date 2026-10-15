import RecipeCard from "./RecipeCard";
import { Container, Stack } from "@mui/material";

const RecipeList = () => {
  return (
    <Container maxWidth="lg">
      <Stack direction="row" spacing={2}>
        <RecipeCard
          title="Pancakes moelleux"
          imageUrl="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800"
          duration={25}
          difficulty={1}
          description="Des pancakes épais et aérés pour un brunch réussi."
          tags="brunch"
        />
        <RecipeCard
          title="Spaghetti carbonara"
          imageUrl="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800"
          duration={25}
          difficulty={2}
          description="La vraie carbonara : guanciale, pecorino, oeufs et poivre. Pas de crème !"
          tags="italien"
        />
        <RecipeCard
          title="Soupe de potiron"
          imageUrl="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800"
          duration={45}
          difficulty={1}
          description="Un velouté d'automne tout doux, parfait avec des croûtons."
          tags="végétarien"
        />
      </Stack>
    </Container>
  );
};

export default RecipeList;
