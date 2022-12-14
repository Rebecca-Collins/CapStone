import dateConverter from "../../Utility/dateConverter";
import "./CommentList.scss";

function CommentList({ comments }) {
  return (
    <div className="comments">
      <div>
        {comments
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((comment) => (
            <div className="comments__text" key={comment.id}>
              <h3 className="comments__name">{comment.first_name}</h3>
              <p className="comments__content">{comment.content}</p>
              <p className="comments__time">
                {dateConverter(comment.created_at)}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommentList;
