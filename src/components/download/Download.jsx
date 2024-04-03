import "./download.css";
import MyPhone from "../../../public/phone-brown.png";
import AppStore from "../../../public/app-store.png";
import PlayStore from "../../../public/play-store.png";

function Download() {
  return (
    <>
      <div className="download-container">
        <div className="left-download-container">
          <h2>Download the app</h2>
          <a href="https://www.apple.com/it/app-store/" target="_blank">
            <img src={AppStore} className="appstore-img" />
          </a>
          <a
            href="https://play.google.com/store/games?hl=en&gl=US&pli=1"
            target="_blank"
          >
            <img src={PlayStore} className="playstore-img" />
          </a>
        </div>
        <div className="right-download-container">
          <img src={MyPhone} alt="phone" className="download-img" />
        </div>
      </div>
    </>
  );
}

export default Download;
