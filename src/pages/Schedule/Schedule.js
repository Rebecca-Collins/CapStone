import "./Schedule.scss";
import axios from "axios";
import { useState, useEffect } from "react";
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
      <h1 className="schedule__heading"> TEAM SCHEDULE</h1>
      <table className="schedule__table">
        <tr className="schedule__table-row">
          <td className="schedule__title">Data</td>
          <td className="schedule__title">Home Team</td>
          <td className="schedule__title">Away Team</td>
          <td className="schedule__title">Time</td>
          <td className="schedule__title">Location</td>
        </tr>
        {schedule.map((data) => (
          <tr className="schedule__table-row">
            <td className="schedule__td">{data.game_date}</td>
            <td className="schedule__td">{data.home_team}</td>
            <td className="schedule__td">{data.away_team}</td>
            <td className="schedule__td">{data.game_time}</td>
            <td className="schedule__td">{data.game_location}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}

export default Schedule;
