import { func } from "prop-types";
import { useState, Component } from "react";
import AgeForm from "./AgeForm.js";
import axios from "axios";


const UserForm = (props) => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
    steam: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    setData({ ...data, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHidden(true);
    setDisplayedItems(AgeForm);
    console.log(data);
    
    axios.post('/site/users', data)
    .then( res => {
      console.log(res.data)
      setData('')
    }
    );
  };




  const [DisplayedItems, setDisplayedItems] = useState([]);

  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <form hidden={hidden} onSubmit={handleSubmit}>
        <center>
          <h3>Rellenar el siguiente formulario para continuar</h3>
          <label>Nombre</label>
          <input
            type="text"
            onChange={handleChange}
            name="nombre"
            value={data.nombre}
          />
          <br />
          <label>Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={data.email}
          />
          <br />
          <label>Steam</label>
          <input
            type="text"
            onChange={handleChange}
            name="steam"
            value={data.steam}
          />
          <br />
          <input type="submit" value="Enviar" />
        </center>
      </form>
      {DisplayedItems}
    </div>
  );
};

export default UserForm;
