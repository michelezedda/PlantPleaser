import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function Recipe() {
  const [details, setDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const myKey = import.meta.env.VITE_SOME_KEY;
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

  return (
    <>
      <Navbar />
      {details && (
        <div className="full-recipe">
          <h2>{details.title}</h2>
          <img
            src={details.image}
            alt={details.title}
            onError={(event) => {
              event.target.src = "default-pic.png";
            }}
          />
          <p>
            <b>Servings:</b> {details.servings}{" "}
          </p>
          <p>
            <b>Ready In:</b> {details.readyInMinutes} minutes
          </p>
          <p>
            <p>
              <b>Diet:</b>{" "}
              {details.diets
                ? details.diets.join(", ")
                : "No diet information available"}
            </p>
          </p>
          <p>
            <b>Ingredients:</b>{" "}
            {details.extendedIngredients
              ? details.extendedIngredients
                  .map((ingredient) => ingredient.name)
                  .join(", ")
              : "No ingredients information available"}
          </p>
          <p>
            <b>Instructions:</b>{" "}
            {details.instructions
              ? details.instructions
              : "No instructions available"}
          </p>
        </div>
      )}
    </>
  );
}

export default Recipe;
