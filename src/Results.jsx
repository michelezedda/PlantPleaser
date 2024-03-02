import { Link } from "react-router-dom";

function Results({ searchResults }) {
  return (
    <>
      <div className="search-result-container">
        <div className="search-result">
          {searchResults.map((result) => (
            <div className="result" key={result.id}>
              <img
                src={result.image}
                alt={result.title}
                onError={(event) => {
                  event.target.src = "default-pic.png";
                }}
              />
              <h4>{result.title}</h4>
              <Link to={`/recipe/${result.id}`} className="view-recipe-btn">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Results;
