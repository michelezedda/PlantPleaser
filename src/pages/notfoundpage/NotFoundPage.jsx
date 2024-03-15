import JustLogo from "../../components/justlogo/JustLogo";
import Sidebar from "../../components/sidebar/Sidebar";
import leafBg from "/leafbg.png";
import "./notfoundpage.css";
import { Helmet } from "react-helmet";

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>[PAGE NOT FOUND] plantpleaser</title>
        <link rel="canonical" href="https://plantpleaser.netlify.app/" />
      </Helmet>
      <JustLogo />
      <Sidebar />
      <div className="not-found-container">
        <h1>Oops! Looks like this page went vegging out somewhere.</h1>
      </div>
      <div className="big-leaf-bg">
        <img src={leafBg} />
      </div>
    </>
  );
}

export default NotFoundPage;
