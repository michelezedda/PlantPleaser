import React, { useState, useEffect } from "react";
import JustLogo from "../components/JustLogo";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LuVegan } from "react-icons/lu";
import leafBg from "/leafbg.png";
import "../styles/recipe.css";

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

  const stripHtml = (html) => {
    let temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
  };

  return (
    <>
      <JustLogo />
      <Sidebar />
      {details && (
        <div className="full-recipe">
          <div className="left-column">
            <h2>
              <LuVegan />
              &nbsp;{details.title}
            </h2>
            <img
              src={details.image}
              alt={details.title}
              onError={(event) => {
                event.target.src = "default-pic.png";
              }}
            />
          </div>
          <div className="right-column">
            <p>
              <b>Servings:</b> {details.servings}{" "}
            </p>
            <p>
              <b>Ready In:</b> {details.readyInMinutes} minutes
            </p>
            <p>
              <b>Diet:</b>{" "}
              {details.diets
                ? details.diets.join(", ")
                : "No diet information available"}
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
                ? stripHtml(details.instructions)
                : "No instructions available"}
            </p>
          </div>
        </div>
      )}
      <div className="big-leaf-bg">
        <img src={leafBg} />
      </div>
    </>
  );
}

export default Recipe;
