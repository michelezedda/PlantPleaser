import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import MostRated from "./components/mostrated/MostRated";
import MostPopular from "./components/mostpopular/MostPopular";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";
import Reviews from "./components/reviews/Reviews";
import Header from "./components/header/Header";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avocado - Vegetarian recipes</title>
        <link rel="canonical" href="https://vegavocado.vercel.app/" />
      </Helmet>
      <Navbar setSearchResults={setSearchResults} />
      <Sidebar />
      <Header />
      <MostRated />
      <MostPopular />
      <Newsletter />
      <Reviews />
      <Download />
      <Footer />
    </>
  );
}

export default App;
