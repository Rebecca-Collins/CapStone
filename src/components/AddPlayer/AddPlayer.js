import "./AddPlayer.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/icons/add.svg"
import Input from "../../components/Input/Input";
import axios from "axios";

function AddPlayer({toggleTheme, theme}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
 
 // Function to toggle the value of formVisible when the button is clicked
  const toggleForm = () => {
    setFormVisible(!formVisible);
  }

  // Variable used to save useNavigate function
  const navigate = useNavigate();

  const [newPlayer, setNewPlayer] = useState({
    first_name: "",
    last_name: "",
    age: "",
    height: "",
    jersey: "",
    description: "",
    position: "",
    img: "",
  });

  const addPlayer = (e) => {
    const { name, value } = e.target;
    setNewPlayer((current) => {
      return {
        ...current,
        [name]: value,
      };
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    // formData.set('')
    axios
      .post("http://localhost:2020/players", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/homepage");
        setSuccess(true);
        setNewPlayer("");
      })
      .catch((err) => {
        setSuccess(false);
        setError(err.response.data);
      });
  };

  return (
    
    <section className="add-player">
      
         <button className="add-player__button" onClick={toggleForm}>Add Player <img className="add-player__icon" src={addIcon} alt="Add Player Icon"/></button>
         {formVisible &&
          <div className={theme === "dark" ? "dark-add" : "light-add"}>
        <form className="add-player__input" onSubmit={handleAdd}>
          <Input 
            type="text"
            onChange={addPlayer}
            required={true}
            value={newPlayer.first_name}
            name="first_name"
            label="First name"
            id="first_name"
          />
          <Input 
            type="text"
            onChange={addPlayer}
            required={true}
            value={newPlayer.last_name}
            name="last_name"
            label="Last name"
            id="last_name"
          />
          <Input 
            type="text"
            onChange={addPlayer}
            required={true}
            value={newPlayer.age}
            name="age"
            label="Age"
            id="age"
          />
          <Input
            type="text"
            onChange={addPlayer}
            required={true}
            value={newPlayer.height}
            name="height"
            label="Height"
            id="height"
          />
          <Input 
            type="text"
            onChange={addPlayer}
            required={true}
            value={newPlayer.jersey}
            name="jersey"
            label="Jersey Number"
            id="jersey"
          />
          <Input 
            type="text"
            onChange={addPlayer}
            required={true}
            value={newPlayer.description}
            name="description"
            label="Description"
            id="description"
          />

          <Input 
            type="text"
            onChange={addPlayer}
            required={true}
            value={newPlayer.position}
            name="position"
            label="Position"
            id="position"
          />
         
          <input className="add-player__upload"
            type="file"
            onChange={addPlayer}
            required={true}
            value={newPlayer.img}
            name="img"
            label="Player Image"
            id="img"
          />

          <button className="add-player__form-button">CREATE</button>
          {success && <div className="add-player__message">Player Uploaded</div>}
          {error && <div className="add-player__message">{error}</div>}
        </form>
       </div>
}
    
    </section>
  );
}

export default AddPlayer;
