import "./header.css";
import AvocadoSplash from "../../../public/avocado-splash.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="left-header-container">
          <h1>Your favorite vegeterian recipes</h1>
        </div>
        <div className="right-header-container">
          <img src={AvocadoSplash} />
        </div>
      </div>
    </>
  );
}

export default Header;
