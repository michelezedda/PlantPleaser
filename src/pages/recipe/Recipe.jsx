import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Download from "../../components/download/Download";
import Footer from "../../components/footer/Footer";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./recipe.css";
import { Helmet } from "react-helmet";

function Recipe() {
  const [details, setDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${params.id}/information`,
          {
            params: {
              apiKey: myKey,
            },
          }
        );
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchDetails();
  }, [params.id]);

  const recipeTitle = details.title || "Recipe";

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{recipeTitle}</title>
        <link rel="canonical" href="https://vegavocado.netlify.app/" />
      </Helmet>
      <Navbar />
      <Sidebar />
      {details && (
        <div className="full-recipe">
          <h2>&nbsp;{details.title}</h2>
          <img
            src={details.image}
            alt={details.title}
            onError={(event) => {
              event.target.src = "default-pic.png";
            }}
          />
          <div className="info-container">
            <div>
              <p>
                <b>Servings: </b> {details.servings}
              </p>
              <p>
                <b>Ready In: </b> {details.readyInMinutes} minutes
              </p>
              <p>
                <b>Diet: </b>
                {details.diets
                  ? details.diets.join(", ")
                  : "No diet information available"}
              </p>
              <p>
                <b>Ingredients:</b>
              </p>
              <ul>
                {details.extendedIngredients ? (
                  details.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.original}</li>
                  ))
                ) : (
                  <li>No ingredients information available</li>
                )}
              </ul>
            </div>
            {details.analyzedInstructions && (
              <div>
                <p>
                  <b>Instructions:</b>
                </p>
                <ol>
                  {details.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      )}
      <Comments />
      <Download />
      <Footer />
    </>
  );
}

export default Recipe;
