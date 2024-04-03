import "./footer.css";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <h3>Follow us!</h3>
        <div className="social-media">
          adawdaw
          <i>{<FaFacebook />}</i>
          <i>
            <FaInstagram />
          </i>
          <i>
            <FaXTwitter />
          </i>
        </div>
      </div>
    </>
  );
}

export default Footer;
