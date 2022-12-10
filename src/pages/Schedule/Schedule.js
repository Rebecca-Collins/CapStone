import "./Schedule.scss";
import axios from "axios";
import { useState, useEffect } from "react";
function Schedule() {

const [schedule, setSchedule] = useState([])


useEffect(() => {


  axios.get('http://localhost:2020/schedule')
    .then((response) => {
      setSchedule(response.data);
      console.log("IS THIS WORKING", response.data);

    })
    .catch((error) => {
      console.log(error);
    });

  }, []);


  return (
    <section className="schedule">
      <div>
        {schedule.map(data =>(
          <div key={data.id}>
            <div>{data.home_team}</div>

          </div>
        ))}
      </div>
    {/* <table>
  <tr>
    <th>Date</th>
    <th>Home Team</th>
    <th>Away Team</th>
    <th>Time</th>
    <th>Location</th>
  </tr>
  <tr>
    <td>Sunday, November 6, 2022 </td>
    <td>Team 1 Team 2 Team 3 Team 4</td>
    <td>Team 4 Team 5 Team 6 Team 7</td>
    <td>Time Time Time Time Time Time </td>
    <td>Location Location Location Location Location Location Location</td>
  </tr>
  <tr>
    <td>Sunday, November 6, 2022 </td>
    <td>Team 1 Team 2 Team 3 Team 4</td>
    <td>Team 4 Team 5 Team 6 Team 7</td>
    <td>Time Time Time Time Time Time </td>
    <td>Location Location Location Location Location Location Location</td>
  </tr>
  <tr>
    <td>Sunday, November 6, 2022 </td>
    <td>Team 1 Team 2 Team 3 Team 4</td>
    <td>Team 4 Team 5 Team 6 Team 7</td>
    <td>Time Time Time Time Time Time </td>
    <td>Location Location Location Location Location Location Location</td>
  </tr>
  <tr>
    <td>Sunday, November 6, 2022 </td>
    <td>Team 1 Team 2 Team 3 Team 4</td>
    <td>Team 4 Team 5 Team 6 Team 7</td>
    <td>Time Time Time Time Time Time </td>
    <td>Location Location Location Location Location Location Location</td>
  </tr>
  <tr>
    <td>Sunday, November 6, 2022 </td>
    <td>Team 1 Team 2 Team 3 Team 4</td>
    <td>Team 4 Team 5 Team 6 Team 7</td>
    <td>Time Time Time Time Time Time </td>
    <td>Location Location Location Location Location Location Location</td>
  </tr>
  
</table> */}
</section>
  )
}

export default Schedule