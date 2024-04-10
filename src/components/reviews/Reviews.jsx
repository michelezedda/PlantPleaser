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
      review: `"Each recipe tells a captivating story with flavors that enchant. From lentil soups to avocado sushi, every dish is a masterpiece. Vibrant photos and innovative presentations spark excitement. Bella Swan's taste buds are forever enchanted."`,
      rate: "⭐⭐⭐⭐⭐",
    },
    {
      id: 1,
      userImg: Edward,
      username: "Edward Cullen",
      userCity: "Chicago, Illinois",
      review: `"At first, I approached this app with a skeptic's scrutiny, skeptical of its promises to satiate my culinary desires sans meat. Yet, to my astonishment, it ensnared me in its web of vegetarian wonders. Each recipe transmutes the mundane into epicurean marvels."`,
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
