function Home({ searchResults }) {
  return (
    <>
      <div className="home-container">
        <div className="select-menu">
          <div>appetizer</div>
          <div>main course</div>
          <div>side dish</div>
          <div>fingerfood</div>
          <div>snack</div>
          <div>bread</div>
          <div>salad</div>
          <div>dessert</div>
          <div>beverage</div>
        </div>
      </div>

      <div className="search-result-container">
        {searchResults.map((result) => (
          <div key={result.id}>
            <h2>{result.title}</h2>
            <img
              src={result.image}
              alt={result.title}
              onError={(event) => {
                event.target.src = "default-pic.png";
              }}
            />
            <button className="view-recipe-btn">View Recipe</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
