import React from "react";
import ReactDOM from "react-dom/client";
import { Formulario, BasePag } from "./Informacion";
import { Datos16 } from "./Button2";
import { Datos7 } from "./Button";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <BasePag />
    <Formulario />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviado");
      }}
    >
      <center>
        <button onClick={function(){
          <div>
            
          </div>
        }}>Enviar</button>
      </center>
    </form>
    <br></br>
    <h3>Continuar luego de elegir tu edad</h3>
    <Datos7 text="Edad 7 o +" />
    <Datos16 text="Edad 16 o +" />
  </div>
);
