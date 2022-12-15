import "./Schedule.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import iconClose from "../../assets/icons/close.svg"
import { Link } from "react-router-dom"

function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2020/schedule")
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
        <Link className="schedule__home-link" to="/homepage">
          <img className="schedule__close-icon" src={iconClose} alt='close icon'/> 
        </Link>
      </div>
      <h1 className="schedule__heading"> TEAM SCHEDULE</h1>
      <table className="schedule__table">
        <thead>
        <tr className="schedule__table-row">
          <th className="schedule__title">Data</th>
          <th className="schedule__title">Home Team</th>
          <th className="schedule__title">Away Team</th>
          <th className="schedule__title">Time</th>
          <th className="schedule__title">Location</th>
        </tr>
        </thead>
        <tbody>
        {schedule.map((data) => (
          <tr className="schedule__table-row">
            <td className=" active">{data.game_date}</td>
            <td className="schedule__td">{data.home_team}</td>
            <td className="active-row">{data.away_team}</td>
            <td className="schedule__td">{data.game_time}</td>
            <td className="active-row">{data.game_location}</td>
          </tr>
          
        ))}
        </tbody>
      </table>
    </section>
  );
}








export default Schedule;
