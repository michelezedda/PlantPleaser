import "./download.css";
import MyPhone from "../../../public/phone-brown.png";
import AppStore from "../../../public/app-store.png";
import PlayStore from "../../../public/play-store.png";

function Download() {
  return (
    <>
      <div className="download-container">
        <div className="left-download-container">
          <h2>Download our app for free!</h2>
          <p>
            Discover a world of delicious plant-based meals that will tantalize
            your taste buds and nourish your body, all at your fingertips!
          </p>
          <div className="download-icons">
            <a href="https://www.apple.com/it/app-store/" target="_blank">
              <img src={AppStore} alt="app store" />
            </a>
            <a
              href="https://play.google.com/store/games?hl=en&gl=US&pli=1"
              target="_blank"
            >
              <img src={PlayStore} alt="play store" />
            </a>
          </div>
        </div>
        <div className="right-download-container">
          <img src={MyPhone} alt="smartphone" className="download-img" />
        </div>
      </div>
    </>
  );
}

export default Download;
