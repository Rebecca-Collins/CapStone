import "./CommentSection.scss";
import axios from "axios";
import { useState } from "react";
import "./CommentSection.scss";
import sortDate from "../../Utility/sortDate";

function CommentSection({ fetchComments }) {
  const [first_name, setFirst_name] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { first_name, content };
    axios
      .post("http://localhost:2020/comments/newcomment", requestBody)
      .then(async () => {
        console.log("WHY??");
        try {
          fetchComments();
        } catch (error) {
          return console.log(error);
        }
      });
  };

  // fetchComments.sort((a, b) => {
  //   // Compare the timestamps of the comments
  //   if (a.timestamp < b.timestamp) {
  //     return -1;
  //   } else if (a.timestamp > b.timestamp) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />

        <label>Add a comment</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentSection;
