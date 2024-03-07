import JustLogo from "../components/JustLogo";
import Sidebar from "../components/Sidebar";
import leafBg from "/leafbg.png";
import "../styles/notfoundpage.css";

function NotFoundPage() {
  return (
    <>
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
