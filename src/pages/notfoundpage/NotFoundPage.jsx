import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Download from "../../components/download/Download";
import Footer from "../../components/footer/Footer";
import "./notfoundpage.css";
import { Helmet } from "react-helmet";
import Avocado404 from "../../../public/404avocado.png";

function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>[PAGE NOT FOUND] Avocado</title>
        <link rel="canonical" href="https://vegavocado.netlify.app/" />
      </Helmet>
      <Navbar />
      <Sidebar />
      <div className="not-found-container">
        <h2>Oops! Looks like this page went vegging out somewhere.</h2>
        <img src={Avocado404} alt="404" />
      </div>
      <Download />
      <Footer />
    </>
  );
}

export default NotFoundPage;
