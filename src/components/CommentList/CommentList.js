import dateConverter from "../../Utility/dateConverter";
import "./CommentList.scss";
import DeleteComment from "../DeleteComment/DeleteComment";
import { useState } from "react";

function CommentList({ comments }) {
  
const [allComments, setAllComments] = useState(comments);
  
const handleDelete = (deletedComment) => {
    setAllComments(allComments.filter(comment => comment.id !== deletedComment.id));
  }

  return (
    <div className="comments">
      <div>
        {comments
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((comment) => (
            <div className="comments__text" key={comment.id}>
              <h2 className="comments__name">{comment.first_name}</h2>            
              <div className="comments__date-content">
              <p className="comments__time">
                {dateConverter(comment.created_at)}
              </p>
              </div>
              <p className="comments__content">{comment.content}</p>
              <DeleteComment
                 comments={comment}
                 onDelete={handleDelete}
                  />
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommentList;