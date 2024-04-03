import "./download.css";
import MyPhone from "../../../public/phone.png";
import AppStore from "../../../public/app-store.png";
import PlayStore from "../../../public/play-store.png";

function Download() {
  return (
    <>
      <div className="download-container">
        <img src={MyPhone} alt="phone" className="download-img" />
      </div>
    </>
  );
}

export default Download;
