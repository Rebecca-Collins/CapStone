// import { useEffect } from "react";


function PlayerDetails({players}) {

// const [players, setPlayers] = useState([]);

// useEffect(() => {
//   getAllPlayers(playerId)
// }, [playerId])

// const indexOfLastRecord = currentPage * recordsPerPage;
// const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

// // Records to be displayed on the current page
// const currentRecords = players.slice(indexOfFirstRecord, 
//   indexOfLastRecord);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => (
          <tr>
            <td>{player.id}</td>
            <td>{player.first_name}</td>
            <td>{player.last_name}</td>
            <td>{player.age}</td>
            <td>{player.height}</td>
            <td>{player.jersey}</td>
            <td>{player.descrition}</td>
            <td>{player.postion}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PlayerDetails


// <div className="details">
    //     <div className="details__container">
    //       <h1>Hello</h1>
    //       {players.map((player) =>{
    //         return (
              
    //           <h1>Hello</h1>
    //         )
    //       })}
          {/* {players.filter((player) => player.id !== playerId)
          .map((player) => {
            return(
              <Link to={`/${player.id}`}
              key={player.id}>
                 <img src={player.img} alt={player.first_name}/>

              </Link>
             
            )



    //       })} */}
    //      <h2>Image</h2>
    //       <h1>
    //         First name:
    //         Last name:
            
    //       </h1>
    //       <div>
    //       <p>age</p>
    //       <p>height</p>
    //       <p>Position</p>
    //       <p>Jersey</p>
    //       <p>description</p>
    //       </div>
    //     </div>
    // </div>
  // )