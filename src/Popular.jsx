import { useEffect, useState } from "react";
import axios from "axios";

function Popular() {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRandomRecipe, setSelectedRandomRecipe] = useState(null);

  const handleViewRandomRecipe = (recipe) => {
    setSelectedRandomRecipe(recipe);
  };

  const fetchRandomRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: "6c999bc765be4b6fbe04290c62df9d3c",
            number: "9",
            tags: "vegeterian, vegan",
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
      <div>
        <div className="popular-container">
          <h2>Popular Recipes</h2>
          <div className="card-container">
            {randomRecipes.map((randomRecipe) => (
              <div className="card" key={randomRecipe.id}>
                <h3>{randomRecipe.title}</h3>
                <img src={randomRecipe.image} alt={randomRecipe.title} />
                <button
                  className="view-recipe-btn"
                  onClick={() => handleViewRandomRecipe(randomRecipe)}
                >
                  View Recipe
                </button>
              </div>
            ))}
          </div>
        </div>
        {selectedRandomRecipe && (
          <div className="full-recipe">
            <h2>{selectedRandomRecipe.title}</h2>
            <button onClick={() => setSelectedRandomRecipe(null)}>X</button>
            <img
              src={selectedRandomRecipe.image}
              alt={selectedRandomRecipe.title}
              onError={(event) => {
                event.target.src = "default-pic.png";
              }}
            />
            <p>
              <b>Servings:</b> {selectedRandomRecipe.servings}{" "}
            </p>
            <p>
              <b>Ready In:</b> {selectedRandomRecipe.readyInMinutes} minutes
            </p>
            <p>
              <b>Diet:</b> {selectedRandomRecipe.diet}
            </p>
            <p>
              <b>Ingredients:</b>{" "}
              {selectedRandomRecipe.extendedIngredients
                .map((ingredient) => ingredient.name)
                .join(", ")}
            </p>
            <p>
              <b>Instructions:</b>{" "}
              {selectedRandomRecipe.instructions
                ? selectedRandomRecipe.instructions
                : "No instructions available"}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Popular;
