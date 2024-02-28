import { useState, useEffect } from "react";
import myLogo from "/logo.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <img src={myLogo} alt="plantpleaser logo" />
        <input></input>
        <button className="search-btn">
          <FaMagnifyingGlass />
        </button>
      </div>
    </>
  );
}

export default Navbar;
