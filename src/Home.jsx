import { useState, useEffect } from "react";


function Home() {

  function viewRecipe() {
    window.location.href = "./Recipe.jsx"
  }

  return (
    
    <>
      <div className="home-container">
        <h1>Home</h1>
        <button onClick={viewRecipe}>View Recipe</button>
      </div>
    </>
  )
}

export default Home