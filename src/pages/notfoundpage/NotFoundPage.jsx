import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./notfoundpage.css";
import { Helmet } from "react-helmet";

function NotFoundPage() {
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
        <h1>Oops! Looks like this page went vegging out somewhere.</h1>
      </div>
    </>
  );
}

export default NotFoundPage;
