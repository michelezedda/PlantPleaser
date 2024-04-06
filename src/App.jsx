import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import MostRated from "./components/mostrated/MostRated";
import Download from "./components/download/Download";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Avocado</title>
        <link rel="canonical" href="https://vegavocado.netlify.app/" />
      </Helmet>
      <Navbar />
      <Sidebar />
      <Header />
      <MostRated />
      <Download />
      <Footer />
    </>
  );
}

export default App;
