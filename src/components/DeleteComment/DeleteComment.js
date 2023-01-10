

// chat gpt but it works----- 
import React from "react";
// import { useState } from "react";
import axios from "axios";
import deleteIcon from "../../assets/icons/delete.svg";
import "./DeleteComment.scss"

// function DeleteComment({ comments }) {

//   const [deletedComments, setDeletedComments] = useState([]);
//---- THIS IS COMMENTED OUT IDK WHY
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);


//   const handleDelete = (comment) => {
//     axios
//       .delete(`http://localhost:2020/comments/${comment.id}`)
//       .then((response) => {
//         // Remove the deleted comment from the list of comments
//         setDeletedComments(deletedComments.filter((c) => c.id !== comment.id));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// -----------------------------------------------
//   ---THIS WORKS BUT DOESNT REMOVE COMMENT FROM PAGE WITHOUT REFRESH
//   const handleDelete = (comment) => {
//     console.log("PLEASE:", comment)
//     axios
//       .delete(`http://localhost:2020/comments/${comment.id}`)
//       .then((response) => {
//         setSuccess(true);
//         setError("");
//         setDeletedComments([...deletedComments, comment.id]);
//       })
//       .catch((error) => {
//         setSuccess(false);
//         setError(error.response.data);
//       });
//   };

//----this works and shows an alert at the top but doesmt remove from page
// const handleDelete = (comment) => {
//     if (window.confirm("Are you sure you want to delete this comment?")) {
//       axios
//         .delete("http://localhost:2020/comments/" +comment.id)
//         .then((response) => {
//           setDeletedComments([...deletedComments, comment.id]);
//         //   setError(null); // Reset the error message
//         })
//         .catch((error) => {
//           console.error(error);
//         //   setError("An error occurred while trying to delete the comment.");
//         });
//     }
//   };

//   return (

//     <div>
//     {error && (
//       <div className="error">
//         {error}
//       </div>
//     )}
//     <img onClick={() => handleDelete(comments)}
//       className="delete-comment__comment-icon"
//       src={deleteIcon}
//       alt="delete icon"
//     />
//   </div>

    //---- THIS WORKS BUT DOESNT REMOVE FROM PAGE
//     <div>
         
//         <img className="delete-comment__comment-icon"
//         src={deleteIcon}
//         alt="delete icon"
//          onClick={() => {
//             handleDelete(comments)
//             console.log(comments)
//          }}     
//               />
              
//     </div>
//   );
// }
// export default DeleteComment;



// ----SHOWS A CONFIRM DELETE MESSAGE...DONT LIKE---
// import React from "react";
// import { useState } from "react";
// import axios from "axios";
// import deleteIcon from "../../assets/icons/delete.svg";

// function DeleteComment({ comments }) {
//   const [deleted, setDeleted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleDelete = (comment) => {
//     axios
//       .delete(`http://localhost:2020/comments/${comment.id}`)
//       .then((response) => {
//         setDeleted(true);
//         setError(null);
//       })
//       .catch((error) => {
//         setError(error.response.data);
//       });
//   };

//   return (
//     <div>
//       {error && (
//         <div className="error">
//           {error}
//         </div>
//       )}
//       {deleted ? (
//         <div className="success">Comment deleted</div>
//       ) : (
//         <img onClick={() => handleDelete(comments)}
//           className="delete-comment__comment-icon"
//           src={deleteIcon}
//           alt="delete icon"
//         />
//       )}
//     </div>
//   );
// }
// export default DeleteComment;




function DeleteComment({ comments, onDelete }) {
    const handleDelete = () => {
        onDelete(comments);
      if (window.confirm("Are you sure you want to delete this comment?")) {
        axios
          .delete("http://localhost:2020/comments/" + comments.id)
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

