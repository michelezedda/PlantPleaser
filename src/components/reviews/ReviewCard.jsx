import "./reviews.css";

function ReviewCard({ userImg, username, userCity, review, rate }) {
  return (
    <>
      <div className="work-card">
        <div className="top-card-section">
          <div className="user-rate-box">{rate}</div>
          <p className="user-review-box">{review}</p>
        </div>
        <div className="bottom-card-section">
          <div className="user-img-box">
            <img src={userImg} />
          </div>
          <div className="user-info-box">
            <p className="user-name-box">{username}</p>
            <p className="user-city-box">{userCity}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
