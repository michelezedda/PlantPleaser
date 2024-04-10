import "./comments.css";
import { useState, useEffect } from "react";
import greenUser from "../../../public/greenUser.png";
import redUser from "../../../public/redUser.png";
import blueUser from "../../../public/blueUser.png";
import { PiArrowElbowDownRight } from "react-icons/pi";

function Comments() {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "I can't wait to try this recipe tonight!",
      username: "GreenChef",
      image: `${greenUser}`,
    },
    {
      id: 2,
      text: "Delicious! I highly recommend it.",
      username: "SpicyVeggie",
      image: `${redUser}`,
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  // Function to load comments from local storage
  const loadCommentsFromLocalStorage = () => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  };

  // Load comments from local storage on component mount
  useEffect(() => {
    loadCommentsFromLocalStorage();
  }, []);

  // Update local storage when comments state changes
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

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
      const newId = Date.now(); // Generate unique ID based on current time
      const newCommentObject = {
        id: newId,
        text: newComment,
        username: username,
        image: selectedImage,
      };
      setComments([...comments, newCommentObject]);
      setNewComment("");
      setUsername("");
      setSelectedImage("");
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
            <span>
              <PiArrowElbowDownRight />
              &nbsp;
              {comment.text}
            </span>
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
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Comments;
