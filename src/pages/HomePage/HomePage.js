import "./HomePage.scss";
import HomeNav from "../../components/HomeNav/HomeNav";
import PlayerCards from "../../components/PlayerCards/PlayerCards";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommentSection from "../../components/CommentSection/CommentSection";
import running from "../../assets/images/running.png"

import CommentList from "../../components/CommentList/CommentList";

function HomePage({players}) {

  const [user, setUser] = useState([]);
  const [failedAuth, setFailedAuth] = useState(false);

  const [comments, setComments] = useState([]);



  const fetchComments = async () => {
    const response = await axios.get("http://localhost:2020/comments");
    setComments(response.data);
    console.log("REBEECAS COMMENTS:", response.data);
  };

  useEffect(() => {
    fetchComments();
  }, [comments]);


    


//  ---- ADMIN AUTH ----
  useEffect(() => {
      const token = sessionStorage.getItem('token');

      if (!token) {
          return setFailedAuth(true);
      }

      // Get the data from the API
      axios.get('http://localhost:2020/users/current', {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
          .then((response) => {
              setUser(response.data);
          })
          .catch((error) => {
              console.log(error);
              setFailedAuth(true);
          });
  }, []);

  const handleLogout = () => {
      sessionStorage.removeItem('token');
      setUser(null);
      setFailedAuth(true);
  };

  if (failedAuth) {
      return (
          <main className="dashboard">
              <p>You must be logged in to see this page.</p>
              <p><Link to="/login">Log in</Link></p>
          </main>
      );
  }

  if (user === !user) {
      return (
          <main className="dashboard">
              <p>Loading...</p>
          </main>
      );
  }



 






  return (
    <section> 
        <HomeNav/>
        <button className="dashboard__logout" onClick={handleLogout}>
                Log out
            </button>
            <div className="home">
            <img className="home__image" src={running} alt={running}/>
            </div>
        
        <div>
            <h1 className="home__heading">Dominating the Competition: The Women's Soccer Team</h1>
        </div>
  {/* <div></div>
            <div><h1>Unbeatable on the Field: The Women's Soccer Team</h1></div>
            <div></div>
            <div> <h1>Champions in the Making: The Women's Soccer Team</h1></div> */}
    

    <PlayerCards players={players}/> 

 <CommentSection fetchComments={fetchComments}/>
 
 <CommentList comments={comments}/>
 
  
   
  
    <footer>
        <div>
           
        </div>
    </footer>
    </section>
  )
}

export default HomePage