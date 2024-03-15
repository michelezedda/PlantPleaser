import { useState } from "react";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Results from "./components/results/Results";
import Popular from "./components/popular/Popular";
import MostRated from "./components/mostrated/MostRated";
import axios from "axios";
import leafBg from "/leafbg.png";
import { Helmet } from "react-helmet";

function App() {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: myKey,
            query: searchRecipe,
            tags: "vegan, vegetarian",
            number: "8",
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>plantpleaser</title>
        <link rel="canonical" href="https://plantpleaser.netlify.app/" />
      </Helmet>
      <Navbar
        searchRecipe={searchRecipe}
        setSearchRecipe={setSearchRecipe}
        handleSearch={handleSearch}
      />
      <Sidebar />
      <Results
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        searchRecipe={searchRecipe}
      />
      <Popular />
      <MostRated />
      <div className="leaf-bg">
        <img src={leafBg} />
      </div>
    </>
  );
}

export default App;
