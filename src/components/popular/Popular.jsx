import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuVegan } from "react-icons/lu";
import "./popular.css";

function Popular() {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRandomRecipe, setSelectedRandomRecipe] = useState(null);

  const handleViewRandomRecipe = (recipe) => {
    setSelectedRandomRecipe(recipe);
  };

  const fetchRandomRecipes = async () => {
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
      setRandomRecipes(response.data?.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  const loadMoreRandomRecipes = async () => {
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
      setRandomRecipes([...randomRecipes, ...(response.data?.recipes || [])]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <>
      <div className="popular-container">
        <h2>MOST POPULAR</h2>
        <div className="card-container">
          {randomRecipes.map((randomRecipe) => (
            <Link
              to={`/recipe/${randomRecipe.id}`}
              onClick={() => handleViewRandomRecipe(randomRecipe)}
              key={randomRecipe.id}
            >
              <div className="card">
                <img
                  src={randomRecipe.image}
                  alt={randomRecipe.title}
                  onError={(event) => {
                    event.target.src = "default-pic.png";
                  }}
                />
                <h4>
                  <LuVegan />
                  &nbsp;{randomRecipe.title}
                </h4>
              </div>
            </Link>
          ))}
          <div
            className="card"
            id="load-more"
            onClick={loadMoreRandomRecipes}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Popular;
