import axios from "axios";
import { useState, useEffect} from "react";
import PlayerCard from "../PlayerCards/PlayerCards";
import SecondPagination from "../SecondPagination/SecondPagination";
function Pagination() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get('http://localhost:2020/players');
            setPost(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);

const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div>
        <h1>Pagination</h1>
        <PlayerCard 
        post={currentPost} 
        loading={loading}/>

        <SecondPagination 
        postsPerPage={postsPerPage}
         totalPosts={post.length}
         paginate={paginate}/>

    </div>
  )
}

export default Pagination