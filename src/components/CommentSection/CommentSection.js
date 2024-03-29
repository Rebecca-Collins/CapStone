import "./CommentSection.scss";
import axios from "axios";
import { useState } from "react";
import "./CommentSection.scss";


function CommentSection({ fetchComments, theme }) {
  const [first_name, setFirst_name] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { first_name, content };
    axios
      .post("https://oceanside-united.herokuapp.com/comments/newcomment", requestBody)
      // .post("http://localhost:8080/comments/newcomment", requestBody)
      .then(async () => {
        try {
          await fetchComments(); 
          setFirst_name("");
          setContent("");
        } catch (error) {
          return console.log(error);
        }
      });
  };

  return (
   
    <div className="form-home">
       <div className={theme === 'dark' ? 'dark-background' : 'light-background'}>
      <h3 className="form-home__heading">Add a comment</h3>

      <form className="form-home__container" onSubmit={handleSubmit}>
        <label className="form-home__name">Name:</label>
        <input
          className="form-home__name-input"
          type="text"
          id="first_name"
          name="first_name"
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
        />

        <label className="form-home__name">Add a comment:</label>
        <textarea
          className="form-home__textarea"
          id="content"
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="form-home__button" type="submit">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default CommentSection;


