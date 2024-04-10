import "./comments.css";
import { useState } from "react";
import greenUser from "../../../public/greenUser.png";
import redUser from "../../../public/redUser.png";
import blueUser from "../../../public/blueUser.png";

function Comments() {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("comments");
    return storedComments
      ? JSON.parse(storedComments)
      : [
          {
            id: 1,
            text: "I can't wait to try this recipe tonight!",
            username: "GreenChef",
            image: greenUser,
          },
          {
            id: 2,
            text: "Delicious! I highly recommend it.",
            username: "SpicyVeggie",
            image: redUser,
          },
          {
            id: 3,
            text: "Wow, just made this incredible recipe and it's an explosion of flavors!",
            username: "BabyCarrot",
            image: blueUser,
          },
        ];
  });
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "" && username.trim() !== "") {
      const newId = Date.now();
      const newCommentObject = {
        id: newId,
        text: newComment,
        username: username,
        image: selectedImage,
      };
      setComments((prevComments) => [...prevComments, newCommentObject]);
      setNewComment("");
      setUsername("");
      setSelectedImage("");

      //     // Update localStorage directly
      //     localStorage.setItem(
      //       "comments",
      //       JSON.stringify([...comments, newCommentObject])
      //     );
    }
  };

  return (
    <div className="comments-container">
      <h2>Comments</h2>
      <p>Share your thoughts with the community!</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <img src={comment.image} alt={comment.username} />
            <strong>{comment.username}: </strong>
            <br />
            <div className="comment">{comment.text}</div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Your Username"
          pattern="[^\s]+"
          title="Usernames cannot contain blank spaces"
          maxLength={15}
          required
        />
        <select value={selectedImage} onChange={handleImageChange} required>
          <option value="">Select Your Avatar</option>
          <option value={greenUser}>Green Avatar</option>
          <option value={redUser}>Red Avatar</option>
          <option value={blueUser}>Blue Avatar</option>
        </select>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          maxLength={100}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Comments;
