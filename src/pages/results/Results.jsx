import { Link } from "react-router-dom";
import { LuVegan } from "react-icons/lu";
import axios from "axios";
import "./results.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Download from "../../components/download/Download";
import Footer from "../../components/footer/Footer";

function Results({ searchResults, setSearchResults, searchRecipe }) {
  const loadMoreRecipes = async () => {
    const myKey = import.meta.env.VITE_SPOONACULAR_KEY;
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: myKey,
            query: searchRecipe,
            tags: "vegan, vegetarian",
            number: "10",
          },
        }
      );
      setSearchResults([...searchResults, ...(response.data?.results || [])]);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      {searchResults && searchResults.length > 0 && (
        <div className="search-result-container">
          <h2>
            Your results for <em>{searchRecipe}</em>
          </h2>
          <div className="search-result">
            {searchResults.map((result) => (
              <Link to={`/recipe/${result.id}`} key={result.id}>
                <div className="result">
                  <img
                    src={result.image}
                    alt={result.title}
                    onError={(event) => {
                      event.target.src = "default-pic.png";
                    }}
                  />
                  <h4>
                    <LuVegan />
                    &nbsp;{result.title}
                  </h4>
                </div>
              </Link>
            ))}
            <div
              className="card"
              id="load-more"
              onClick={loadMoreRecipes}
            ></div>
          </div>
        </div>
      )}
      <Download />
      <Footer />
    </>
  );
}

export default Results;
