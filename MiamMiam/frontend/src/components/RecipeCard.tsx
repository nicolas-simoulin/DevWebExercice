interface RecipeCardProps {
  title: string;
  imageUrl: string;
  duration: number;
  difficulty: number;
  description?: string;
}

const RecipeCard = ({
  title,
  imageUrl,
  duration,
  difficulty,
  description,
}: RecipeCardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      {description && <p>{description}</p>}
      <p>{duration} min</p>
      <p>Difficulté : {difficulty}/5 </p>
    </div>
  );
};

export default RecipeCard;
