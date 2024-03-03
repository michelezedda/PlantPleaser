import { useState } from "react";
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Results from "./Results";
import Popular from "./Popular";
import axios from "axios";
import leafBg from "/leafbg.png";

function App() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isVeg, setIsVeg] = useState(true);

  const handleSearch = async () => {
    const myKey = import.meta.env.VITE_SOME_KEY;
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: myKey,
            query: searchRecipe,
            diet: isVeg ? "vegan, vegetarian" : "",
            number: "21",
          },
        }
      );
      setSearchResults(response.data?.results || []);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <>
      <Navbar
        searchRecipe={searchRecipe}
        setSearchRecipe={setSearchRecipe}
        handleSearch={handleSearch}
      />
      <Sidebar />
      <Popular isVeg={isVeg} />
      <Results searchResults={searchResults} searchRecipe={searchRecipe} />
      <div className="leaf-bg">
        <img src={leafBg} />
      </div>
    </>
  );
}

export default App;
