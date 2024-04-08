import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import MostRated from "./components/mostrated/MostRated";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avocado</title>
        <link rel="canonical" href="https://vegavocado.netlify.app/" />
      </Helmet>
      <Navbar setSearchResults={setSearchResults} />
      <Sidebar />
      <MostRated />
      <Download />
      <Footer />
    </>
  );
}

export default App;
