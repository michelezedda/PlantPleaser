import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Download from "../../components/download/Download";
import Footer from "../../components/footer/Footer";
import "./category.css";
import { Helmet } from "react-helmet";

function Category() {
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const { category } = useParams();

  const fetchCategoryRecipes = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
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
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avocado: {category} recipes</title>
        <link rel="canonical" href="https://vegavocado.netlify.app/" />
      </Helmet>
      <Navbar />
      <Sidebar />
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
                <h4>&nbsp;{categoryRecipe.title}</h4>
              </div>
            </Link>
          ))}
          <div
            className="card"
            id="load-more"
            onClick={loadMoreCategoryRecipes}
          ></div>
        </div>
      </div>
      <Download />
      <Footer />
    </>
  );
}

export default Category;
