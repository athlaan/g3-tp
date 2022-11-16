import { func } from "prop-types";
import { useState, Component } from "react";
import AgeForm from "./AgeForm.js";

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
    console.log(data);
  };

  const [DisplayedItems, setDisplayedItems] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    console.log(typeof DisplayedItems);
    setDisplayedItems(AgeForm);
  }

  const [hidden, setHidden] = useState(true);

  return (
    <form onSubmit={handleSubmit}>
      <center>
        {hidden ? (
          <h3>Rellenar el siguiente formulario para continuar</h3>
        ) : null}
        {hidden ? <label>Nombre</label> : null}
        {hidden ? (
          <input
            type="text"
            onChange={handleChange}
            name="nombre"
            value={data.nombre}
          />
        ) : null}
        {hidden ? <br /> : null}
        {hidden ? <label>Email</label> : null}
        {hidden ? (
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={data.email}
          />
        ) : null}
        {hidden ? <br /> : null}
        {hidden ? <label>Steam</label> : null}
        {hidden ? (
          <input
            type="text"
            onChange={handleChange}
            name="steam"
            value={data.steam}
          />
        ) : null}
        <br />
        {hidden ? (
          <button onClick={() => setHidden((s) => !s)}>Enviar</button>
        ) : null}
        {!hidden ? (
          <button onClick={(event) => handleClick(event)}> Continuar </button>
        ) : null}
      </center>
      {DisplayedItems}
    </form>
  );
};

export default UserForm;
