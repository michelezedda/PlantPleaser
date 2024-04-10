import "./reviews.css";
import Bella from "../../../public/bella.jpg";
import Edward from "../../../public/edward.jpg";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const reviews = [
    {
      id: 0,
      userImg: Bella,
      username: "Isabella M. Swan",
      userCity: "Forks, Washington",
      review:
        "Discovering this vegetarian app felt like stumbling upon a hidden gem in a culinary desert. From comforting lentil soups to zesty tofu stir-fries, each recipe ignites a new passion for plant-based cooking. It's more than a mere app; it's my trusted companion in the kitchen, guiding me towards healthier, more flavorful meals.",
      rate: "⭐⭐⭐⭐⭐",
    },
    {
      id: 1,
      userImg: Edward,
      username: "Edward Cullen",
      userCity: "Chicago, Illinois",
      review:
        "Initially skeptical, I found myself enchanted by the array of vegetarian delights this app offers. Each recipe is a testament to creativity and flavor, transforming mundane ingredients into culinary masterpieces. It has redefined my perception of vegetarian cuisine, proving that meatless meals can be as satisfying and indulgent as any. A true revelation in my eternal quest for gastronomic perfection.",
      rate: "⭐⭐⭐⭐⭐",
    },
  ];
  return (
    <>
      <div className="reviews-container">
        <div className="reviews-wrapper">
          <h2>Reviewed by People</h2>
          <p>
            Explore the delightful experiences of our community by delving into
            their testimonials. Our members have savored our vegan and
            vegetarian recipes and are enthusiastic to share their positive
            experiences with you.
          </p>
          <div className="review">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                userImg={review.userImg}
                username={review.username}
                userCity={review.userCity}
                review={review.review}
                rate={review.rate}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Reviews;
