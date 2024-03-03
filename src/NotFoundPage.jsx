import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import leafBg from "/leafbg.png";

function NotFoundPage() {
  return (
    <>
      <Navbar />
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
