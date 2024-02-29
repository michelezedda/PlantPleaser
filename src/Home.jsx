import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";

function Home({ searchResults }) {
  const [recipes, setRecipes] = useState([]);

  const BASE_URL = "https://api.spoonacular.com/";
  const KEY = "9916ddb00d084027bdf1766ef68da8dd";
  const DIET = "vegan";
  const NUMBER = "9";

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}recipes/random?apiKey=${KEY}&number=${NUMBER}&tags=${DIET}`
      )
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        if (data && data.recipes) {
          setRecipes(data.recipes);
        } else {
          console.error("Response format is incorrect or missing recipes data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
            <p>{result.description}</p>
            <button className="view-recipe-btn">View Recipe</button>
          </div>
        ))}
      </div>

      <div className="popular-container">
        <h2>Popular</h2>
        <div className="card-container">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div className="card" key={recipe.id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
                <button className="view-recipe-btn">View Recipe</button>
              </div>
            ))
          ) : (
            <p>No recipes found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
