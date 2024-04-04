import "./header.css";
import AvocadoSplash from "../../../public/avocado-splash.png";
import Healthy from "../../../public/healthy.png";
import Vegetarian from "../../../public/vegetarian.png";
import Tasty from "../../../public/tasty.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="left-header-container">
          <h1>Your favorite vegeterian recipes</h1>
          <div className="icons">
            <img src={Vegetarian} />
            <img src={Healthy} />
            <img src={Tasty} />
          </div>
        </div>
        <div className="right-header-container">
          <img src={AvocadoSplash} />
        </div>
      </div>
    </>
  );
}

export default Header;
