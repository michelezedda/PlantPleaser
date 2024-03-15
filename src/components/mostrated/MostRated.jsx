import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuVegan } from "react-icons/lu";
import "./mostrated.css";

function MostRated() {
  const [mostRatedRecipes, setMostRatedRecipes] = useState([]);
  const [selectedMostRatedRecipe, setSelectedMostRatedRecipe] = useState(null);

  const handleViewMostRatedRecipe = (recipe) => {
    setSelectedMostRatedRecipe(recipe);
  };

  const fetchMostRatedRecipes = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            tags: "vegan, vegetarian",
            number: "8",
          },
        }
      );
      setMostRatedRecipes(response.data?.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMostRatedRecipes();
  }, []);

  const loadMoreMostRatedRecipes = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            tags: "vegan, vegetarian",
            number: "10",
          },
        }
      );
      setMostRatedRecipes([
        ...mostRatedRecipes,
        ...(response.data?.recipes || []),
      ]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <>
      <div className="most-rated-container">
        <h2>MOST RATED</h2>
        <div className="rated-container">
          {mostRatedRecipes.map((mostRatedRecipe) => (
            <Link
              to={`/recipe/${mostRatedRecipe.id}`}
              onClick={() => handleViewMostRatedRecipe(mostRatedRecipe)}
              key={mostRatedRecipe.id}
            >
              <div className="rated">
                <img
                  src={mostRatedRecipe.image}
                  alt={mostRatedRecipe.title}
                  onError={(event) => {
                    event.target.src = "default-pic.png";
                  }}
                />
                <h4>
                  <LuVegan />
                  &nbsp;{mostRatedRecipe.title}
                </h4>
              </div>
            </Link>
          ))}
          <div
            className="card"
            id="load-more"
            onClick={loadMoreMostRatedRecipes}
          >
            <h4>Load More Recipes</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MostRated;
