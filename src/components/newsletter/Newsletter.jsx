import "./newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="newsletter-container">
        <div className="newsletter-wrapper">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Stay updated with the latest vegetarian recipes, cooking tips, and
            exclusive offers by subscribing to our newsletter!
          </p>
        </div>
        <div className="newsletter">
          <h3>Join now!</h3>
          <form>
            <div class="form-container">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </div>
            <label>
              <input type="checkbox" required /> I agree to the privacy policy*
            </label>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
