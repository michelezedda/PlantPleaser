import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LuVegan } from "react-icons/lu";
import leafBg from "/leafbg.png";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Snack(isVeg) {
  const [appetizerRecipes, setAppetizerRecipes] = useState([]);

  const fetchAppetizerRecipes = async () => {
    const myKey = import.meta.env.VITE_SOME_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            diet: isVeg ? "vegan, vegetarian" : "",
            type: "snack",
            number: "21",
          },
        }
      );
      setAppetizerRecipes(response.data?.recipes || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAppetizerRecipes();
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="categories-container">
        <h2>SNACK</h2>
        <div className="categories-result">
          {appetizerRecipes.map((appetizerRecipe) => (
            <Link to={`/recipe/${appetizerRecipe.id}`}>
              <div className="category-result" key={appetizerRecipe.id}>
                <img
                  src={appetizerRecipe.image}
                  alt={appetizerRecipe.title}
                  onError={(event) => {
                    event.target.src = "default-pic.png";
                  }}
                />
                <h4>
                  <LuVegan />
                  &nbsp;{appetizerRecipe.title}
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

export default Snack;
