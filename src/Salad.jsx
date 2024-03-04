import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuVegan } from "react-icons/lu";
import leafBg from "/leafbg.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Salad({ isVeg }) {
  const [categoryRecipes, setCategoryRecipes] = useState([]);

  const fetchCategoryRecipes = async () => {
    const myKey = import.meta.env.VITE_SOME_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            diet: isVeg ? "vegan, vegetarian" : "",
            type: "salad",
            number: "21",
          },
        }
      );
      setCategoryRecipes(response.data?.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryRecipes();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="categories-container">
        <h2>DESSERT</h2>
        <div className="categories-result">
          {categoryRecipes.map((categoryRecipe) => (
            <Link to={`/recipe/${categoryRecipe.id}`}>
              <div className="category-result" key={categoryRecipe.id}>
                <img
                  src={categoryRecipe.image}
                  alt={categoryRecipe.title}
                  onError={(event) => {
                    event.target.src = "default-pic.png";
                  }}
                />
                <h4>
                  <LuVegan />
                  &nbsp;{categoryRecipe.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="leaf-bg">
        <img src={leafBg} />
      </div>
    </>
  );
}

export default Salad;
