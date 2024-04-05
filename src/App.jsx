import { useState } from "react";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import MostRated from "./components/mostrated/MostRated";
import Download from "./components/download/Download";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import axios from "axios";
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
        <title>Avocado</title>
        <link rel="canonical" href="https://vegavocado.netlify.app/" />
      </Helmet>
      <Navbar
        searchRecipe={searchRecipe}
        setSearchRecipe={setSearchRecipe}
        handleSearch={handleSearch}
      />
      <Sidebar />
      <Header />
      <MostRated />
      <Download />
      <Footer />
    </>
  );
}

export default App;
