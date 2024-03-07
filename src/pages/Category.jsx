import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { LuVegan } from "react-icons/lu";
import leafBg from "/leafbg.png";
import JustLogo from "../components/JustLogo";
import Sidebar from "../components/Sidebar";
import "../styles/category.css";

function Category() {
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const { category } = useParams();

  const fetchCategoryRecipes = async () => {
    const myKey = import.meta.env.VITE_SOME_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            tags: `vegan, vegetarian, ${category}`,
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
  }, [category]);

  const loadMoreCategoryRecipes = async () => {
    const myKey = import.meta.env.VITE_SOME_KEY;
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random`,
        {
          params: {
            apiKey: myKey,
            tags: `vegan, vegetarian, ${category}`,
            number: "10",
          },
        }
      );
      setCategoryRecipes([
        ...categoryRecipes,
        ...(response.data?.recipes || []),
      ]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <>
      <Sidebar />
      <JustLogo />
      <div className="categories-container">
        <h2>{category.toUpperCase()}</h2>
        <div className="categories-result">
          {categoryRecipes.map((categoryRecipe) => (
            <Link to={`/recipe/${categoryRecipe.id}`} key={categoryRecipe.id}>
              <div className="category-result">
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
          <div
            className="card"
            id="load-more"
            onClick={loadMoreCategoryRecipes}
          >
            <h4>Load More Recipes</h4>
          </div>
        </div>
      </div>
      <div className="leaf-bg">
        <img src={leafBg} alt="leaf background" />
      </div>
    </>
  );
}

export default Category;
