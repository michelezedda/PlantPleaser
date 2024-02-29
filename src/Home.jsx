import { useEffect, useState } from "react";
import axios from "axios";

function Home({ searchResults }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewRandomRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const fetchRandomRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: "9e0c96ea51a24d6d86010dbcabec905f",
            number: "9",
            tags: "vegan",
          },
        }
      );
      setRecipes(response.data?.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return (
    <>
      <div className="home-container">
        <h2>Selection</h2>
        <div className="select-menu">
          <div>appetizer</div>
          <div>main course</div>
          <div>side dish</div>
          <div>fingerfood</div>
          <div>snack</div>
          <div>bread</div>
          <div>salad</div>
          <div>dessert</div>
          <div>beverage</div>
        </div>
      </div>

      <div className="search-result-container">
        {searchResults.map((result) => (
          <div key={result.id}>
            <h2>{result.title}</h2>
            <img src={result.image} alt={result.title} />
            <button className="view-recipe-btn">View Recipe</button>
          </div>
        ))}
      </div>

      <div>
        <div className="popular-container">
          <h2>Popular</h2>
          <div className="card-container">
            {recipes.map((recipe) => (
              <div className="card" key={recipe.id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
                <button
                  className="view-recipe-btn"
                  onClick={() => handleViewRandomRecipe(recipe)}
                >
                  View Recipe
                </button>
              </div>
            ))}
          </div>
        </div>
        {selectedRecipe && (
          <div className="full-recipe">
            <h2>{selectedRecipe.title}</h2>
            <button onClick={() => setSelectedRecipe(null)}>X</button>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} />
            <p>
              <b>Servings:</b> {selectedRecipe.servings}{" "}
            </p>
            <p>
              <b>Ready In:</b> {selectedRecipe.readyInMinutes} minutes
            </p>
            <p>
              <b>Ingredients:</b>{" "}
              {selectedRecipe.extendedIngredients
                .map((ingredient) => ingredient.name)
                .join(", ")}
            </p>
            <p>
              <b>Instructions:</b>{" "}
              {selectedRecipe.instructions
                ? selectedRecipe.instructions
                : "No instructions available"}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
