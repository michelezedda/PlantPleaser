import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./mostpopular.css";

function MostPopular() {
  const [mostPopularRecipes, setMostPopularRecipes] = useState([]);
  const [selectedMostPopularRecipe, setSelectedMostPopularRecipe] =
    useState(null);

  const handleViewMostPopularRecipe = (recipe) => {
    setSelectedMostPopularRecipe(recipe);
  };

  const fetchMostPopularRecipes = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            tags: "vegan, vegetarian",
            number: "7",
          },
        }
      );
      setMostPopularRecipes(response.data?.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMostPopularRecipes();
  }, []);

  const loadMoreMostPopularRecipes = async () => {
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
      setMostPopularRecipes([
        ...mostPopularRecipes,
        ...(response.data?.recipes || []),
      ]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <>
      <div className="most-popular-container">
        <h2>MOST POPULAR</h2>
        <div className="popular-container">
          {mostPopularRecipes.map((mostPopularRecipe) => (
            <Link
              to={`/recipe/${mostPopularRecipe.id}`}
              onClick={() => handleViewMostPopularRecipe(mostPopularRecipe)}
              key={mostPopularRecipe.id}
            >
              <div className="popular">
                <img
                  src={mostPopularRecipe.image}
                  alt={mostPopularRecipe.title}
                  onError={(event) => {
                    event.target.src = "default-pic.png";
                  }}
                />
                <h4>&nbsp;{mostPopularRecipe.title}</h4>
              </div>
            </Link>
          ))}
          <div
            className="card"
            id="load-more"
            onClick={loadMoreMostPopularRecipes}
          ></div>
        </div>
      </div>
    </>
  );
}

export default MostPopular;
