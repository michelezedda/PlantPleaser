import React from "react";
import PropTypes from "prop-types";
import myLogo from "/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar({ searchRecipe, setSearchRecipe, handleSearch }) {
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchRecipe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    navigate("/results");
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
            <button type="submit" className="search-btn" onClick={handleSubmit}>
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  searchRecipe: PropTypes.string.isRequired,
  setSearchRecipe: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Navbar;
