import { Link } from "react-router-dom";
import { LuVegan } from "react-icons/lu";

function Results({ searchResults, searchRecipe }) {
  return (
    <>
      <div className="search-result-container">
        {(searchResults.length > 0 && (
          <h2>
            Your results for <em>{searchRecipe}</em>
          </h2>
        )) ||
          ""}
        <div className="search-result">
          {searchResults.map((result) => (
            <Link to={`/recipe/${result.id}`}>
              <div className="result" key={result.id}>
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
        </div>
      </div>
    </>
  );
}

export default Results;
