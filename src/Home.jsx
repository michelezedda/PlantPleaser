import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const BASE_URL = "https://api.spoonacular.com/";
const KEY = "6c999bc765be4b6fbe04290c62df9d3c";
const DIET = "vegan";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}recipes/random?apiKey=${KEY}&number=5&tags=${DIET}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
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
        <div className="home-title-container">
          <h2>Selection</h2>
        </div>
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
      <div className="popular-container">
        <h2>Popular</h2>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          <div className="card-container">
            {recipes.map((recipe) => {
              return (
                <SplideSlide>
                  <div className="card">
                    <h3>{recipe.title}</h3>
                    <img src={recipe.image} alt={recipe.title} />
                    <button className="view-recipe-btn">View Recipe</button>
                  </div>
                </SplideSlide>
              );
            })}
          </div>
        </Splide>
      </div>
    </>
  );
}

export default Home;
