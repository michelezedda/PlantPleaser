import { useState, useEffect } from "react";
import myLogo from '../public/logo.png'


function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <img src={myLogo} alt="plantpleaser logo" />
        <input></input>
        <button className="search-btn">search</button>
        </div>
    </>
  )
}

export default Navbar