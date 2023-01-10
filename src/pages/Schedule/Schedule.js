import "./Schedule.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import HomeNav from "../../components/HomeNav/HomeNav";
import light from "../../assets/icons/light.svg";
import dark from "../../assets/icons/dark.svg";

function Schedule({theme, toggleTheme}) {
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
   <section>
       <div className="schedule-toggle" onClick={toggleTheme}>
        {" "}
        {theme === "light" ? (
          <img className="toggle-schedule-img" src={light} alt="dark icon" />
        ) : (
          <img className="toggle-schedule-img" src={dark} alt="light icon" />
        )}
      </div>
       <div className={theme === "dark" ? "dark-schedule" : "light-schedule"}>
       <HomeNav/>
       <div className="schedule">
      <h1 className="schedule__heading"> TEAM SCHEDULE</h1>
      <table className={theme === "dark" ? "dark-schedule-box-shadow" : "light-schedule-box-shadow"}>
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
      </div>
    </div>
    </section>
  );
}

export default Schedule;
