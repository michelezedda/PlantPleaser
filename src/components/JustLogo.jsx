import React from "react";
import myLogo from "/logo.png";
import { Link } from "react-router-dom";
import "../styles/justlogo.css";

function JustLogo() {
  return (
    <>
      <div className="justlogo-container">
        <Link to="/">
          <img src={myLogo} alt="plantpleaser logo" />
        </Link>
      </div>
    </>
  );
}
export default JustLogo;
