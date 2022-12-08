import { Link } from "react-router-dom"

function SecondPagination({ postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div>
        <ul>
           {pageNumbers.map(number => (
            <li key={number}>
               <Link onClick={() => paginate(number)} to="#">{number}</Link> 

            </li>
           ))} 
        </ul>
    </div>
  )
}

export default SecondPagination