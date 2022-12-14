// import closeIcon from "../../assets/icons/close.svg";
// import axios from "axios";
// import { useState } from "react";

// function Delete({ playerToDelete, handleDelete, success, error}) {

//   //   const [success, setSuccess] = useState("");
//   // const [error, setError] = useState("");

//   // const handleDelete = (event) => {
//   //   axios
//   //     .delete('http://localhost:2020/players/' + playerToDelete.id )
//   //     .then((response) => {
//   //       setSuccess("The Item Was Deleted Successfully!");
//   //       axios.get("http://localhost:1010/inventories").then((response) => {
//   //         playerToDelete(response.data);
//   //       });
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //       setError("Something Went Wrong! Please Try Again.");
//   //     });
//   // };
//   const handleCloseModal = () => {
//     setClickDelete(false);
//   };

//   return (
//     <>
//       <div className="delete"></div>
//       <div className="delete__container">
//         <img
//           onClick={handleCloseModal}
//           className="delete__close"
//           src={closeIcon}
//           alt="closing x"
//         />
//         <div className="delete__text-container">
//           <h2 className="delete__heading">
//             Delete {playerToDelete}?{" "}
//           </h2>
//           <p className="delete__content">
//             Please confirm that you'd like to delete {playerToDelete} from the
//             players list. You won't be able to undo this action.
//           </p>
//         </div>

//         <div className="delete__buttons">
//           <p className="delete__message delete__message--success">{success}</p>
//           <p className="delete__message">{error}</p>
//           <button onClick={handleCloseModal} className="delete__cancel-button">
//             Cancel
//           </button>
//           <button onClick={handleDelete} className="delete__delete-button">
//             Delete
//           </button>
//         </div>
//       </div>
//     </>
//   );
  
// }

// export default Delete