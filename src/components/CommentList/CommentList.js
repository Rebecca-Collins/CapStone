
import dateConverter from "../../Utility/dateConverter"
import "./CommentList.scss";


function CommentList({comments}) {


  return(
<div className="comments">
  <div className="comments__text">
    {comments.map(comment => (
      <div className="comments__text" key={comment.id}>
      <h3>{comment.first_name}</h3>
      <p className="comments__content">{comment.content}</p>
      <p>{dateConverter(comment.created_at)}</p>
      </div>
    ))}
  <h3>name</h3>
    <p className="comments__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro, 
      laboriosam exercitationem odit voluptates magni debitis vero. Ipsa, 
      modi maxime. Vel voluptate doloremque pariatur deserunt libero ex 
      quisquam provident delectus!
      </p>
  </div>
  <div className="comments__text">
  <h3>name</h3>
    <p className="comments__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro, 
      laboriosam exercitationem odit voluptates magni debitis vero. Ipsa, 
      modi maxime. Vel voluptate doloremque pariatur deserunt libero ex 
      quisquam provident delectus!
      </p>
  </div>
  <div className="comments__text">
    <h3>name</h3>
    <p className="comments__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro, 
      laboriosam exercitationem odit voluptates magni debitis vero. Ipsa, 
      modi maxime. Vel voluptate doloremque pariatur deserunt libero ex 
      quisquam provident delectus!
      </p>
  </div>
  <div className="comments__text">
  <h3>name</h3>
    <p className="comments__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro, 
      laboriosam exercitationem odit voluptates magni debitis vero. Ipsa, 
      modi maxime. Vel voluptate doloremque pariatur deserunt libero ex 
      quisquam provident delectus!
      </p>
  </div>
  <div className="comments__text">
  <h3>name</h3>
    <p className="comments__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro, 
      laboriosam exercitationem odit voluptates magni debitis vero. Ipsa, 
      modi maxime. Vel voluptate doloremque pariatur deserunt libero ex 
      quisquam provident delectus!
      </p>
  </div>

</div>
  ) 
}

export default CommentList;



  // axios.get('http://localhost:2020/comments')
  //         .then((response) => {
  //            setComments(response.data)
  //         });

  // axios.get("http://localhost:2020/comments")
  // .then((response) => {
  //   setComments(response.data);
  //   // console.log("REBEECAS COMMENTS:", response.data);
  // },[]);

// axios.post("http://localhost:2020/comments")