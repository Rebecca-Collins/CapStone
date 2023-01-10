// import axios from 'axios';
// import React, { useState } from 'react';

// function Likes({ comments }) {
//   const [likes, setLikes] = useState(0);

//   const handleClick = (e) => {
//     e.preventDefault();
//     setLikes(likes + 1);  // update the value of likes

//     // send the updated number of likes to the server
//     axios
//       .post(`http://localhost:2020/comments/${comments.id}/like`, {
//         likes: likes + 1,  // send the updated number of likes in the request body
//       })
//       .then((response) => {
//         setLikes(response.data.likes);  // update the component's state with the updated number of likes returned by the server
//       })
//       .catch((error) => {
//         console.error(error);  // log any errors
//       });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>
//         Click me: {likes}
//       </button>
//     </div>
//   );
// }

// export default Likes;

//----THIS IS THE BEST ONE SO FAR --- 
// import axios from 'axios';
// import React from 'react'
// import thumbsUp from "../../assets/icons/thumbsUp.svg"
// import { useState } from "react";

// function Likes({ comments }) {
//     const [likes, setLikes] = useState(0);
  
//     const handleClick = (e) => {
//       e.preventDefault();
//       console.log(likes);  // log the current value of likes
//       setLikes(likes + 1);  // update the value of likes
//       console.log(likes);  // log the updated value of likes
  
//       if (comments && comments.id) {
//         axios
//           .post(`http://localhost:2020/comments/${comments.id}/like`, {
//               likes,// send the current number of likes in the request body
//           })
//           .then((response) => {
//             setLikes(response.data.likes);  // update the component's state with the updated number of likes
//           })
//           .catch((error) => {
//             console.error(error);  // log any errors
//           });
//       }
//     };
  
//     return (
//       <div>
//        <button> <img src={thumbsUp} alt={thumbsUp} onClick={handleClick}/>Click me: {likes}</button>
//       </div>
//     );
//   }
//   export default Likes;

// --- first attempt.. it adds to the button but doenst stay and doesnt add to back end 
// function Likes({comments}) {

//     const [likes, setLikes] = useState(0);
   
//     // const handleClick = (e) => {
//     //     e.preventDefault();
//     //   setLikes(likes + 1);
    
//     const handleClick = (e) => {
//         e.preventDefault();
//         console.log(likes);  // log the current value of likes
//         setLikes(likes + 1);  // update the value of likes
//         console.log(likes);  // log the updated value of likes
      
//         axios
//   .post(`http://localhost:2020/comments/${comments.id}/like`, {
//     data: { likes },  // send the current number of likes in the request body
//   })
//   .then((response) => {
//     setLikes(response.data.likes);
        
//         // axios
//         // .post(`http://localhost:2020/comments/${comments.id}/likes`)
//         // .then((response) => {
//         //     setLikes()
//         })
//         .catch((error) => {
//             console.log(error);
//           });
//     };

//   return (
//     <div>
//          <button onClick={handleClick}>
//       Click me: {likes}
//     </button>
//     </div>
//   )
// }

// export default Likes;

