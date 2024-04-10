import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import myLogo from "/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar({ setSearchResults }) {
  const [searchRecipe, setSearchRecipe] = useState("");

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
            diet: "vegan, vegetarian",
            number: "8",
          },
        }
      );
      setSearchResults(response.data?.results || []);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchRecipe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    navigate(`/results?query=${encodeURIComponent(searchRecipe)}`);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={myLogo} alt="avocado logo" />
          </Link>
        </div>
        <div className="search-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchRecipe}
              onChange={handleChange}
              placeholder="search for a recipe"
            />
            <button type="submit" className="search-btn">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Navbar;
