import { useState, useEffect } from "react";
import myLogo from "/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";

function Navbar({ searchRecipe, setSearchRecipe, handleSearch }) {
  return (
    <>
      <div className="navbar-container">
        <img src={myLogo} alt="plantpleaser logo" />
        <input
          type="text"
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaMagnifyingGlass />
        </button>
      </div>
    </>
  );
}

export default Navbar;
