import "./footer.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="left-footer-container">
          <h3>Follow us!</h3>
          <div className="social-media">
            <a href="https://www.facebook.com/" target="_blank">
              <i>
                <FaFacebookSquare /> &nbsp;
              </i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i>
                <FaInstagram /> &nbsp;
              </i>
            </a>
            <a href="https://www.x.com/" target="_blank">
              <i>
                <FaXTwitter />
              </i>
            </a>
          </div>
          <div className="right-footer-container">NEWSLETTER</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
