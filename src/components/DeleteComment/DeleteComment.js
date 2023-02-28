import React from "react";
import axios from "axios";
import deleteIcon from "../../assets/icons/delete.svg";
import "./DeleteComment.scss"

function DeleteComment({ comments, onDelete }) {
    const handleDelete = () => {
        onDelete(comments);
      if (window.confirm("Are you sure you want to delete this comment?")) {
        axios
          .delete("https://oceanside-united.fly.dev/comments/" + comments.id)
          // .delete("http://localhost:8080/comments/" + comments.id)
          .then((response) => {
            onDelete(comments);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
  
    return (
      <div className="delete">
        <img
          className="delete__comment-icon"
          src={deleteIcon}
          alt="delete icon"
          onClick={() => {
            handleDelete(comments);
            console.log(comments);
          }}
        />
      </div>
    );
  }
  export default DeleteComment;

