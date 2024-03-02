import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";

function Popular(isVeg) {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRandomRecipe, setSelectedRandomRecipe] = useState(null);

  const handleViewRandomRecipe = (recipe) => {
    setSelectedRandomRecipe(recipe);
  };

  const fetchRandomRecipes = async () => {
    const myKey = import.meta.env.VITE_SOME_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            diet: isVeg ? "vegan, vegetarian" : null,
            number: "8",
          },
        }
      );
      setRandomRecipes(response.data?.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <>
      <div className="popular-container">
        <h2>Popular Recipes</h2>
        <div className="card-container">
          {randomRecipes.map((randomRecipe) => (
            <div className="card" key={randomRecipe.id}>
              <img
                src={randomRecipe.image}
                alt={randomRecipe.title}
                onError={(event) => {
                  event.target.src = "default-pic.png";
                }}
              />
              <h4>{randomRecipe.title}</h4>
              <Link
                to={`/recipe/${randomRecipe.id}`}
                className="view-recipe-btn"
                onClick={() => handleViewRandomRecipe(randomRecipe)}
              >
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </div>
      {selectedRandomRecipe && (
        <Recipe selectedRandomRecipe={selectedRandomRecipe} />
      )}
    </>
  );
}

export default Popular;
