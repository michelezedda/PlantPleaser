import "./header.css";
import myAvocado from "../../../public/avocado.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <h1>Welcome to Avocado</h1>
          <p>
            Explore delectable vegetarian dishes with our diverse collection of
            flavorful, meat-free recipes for every palate
          </p>
        </div>
        <img src={myAvocado} alt="avocado" />
      </div>
    </>
  );
}

export default Header;
