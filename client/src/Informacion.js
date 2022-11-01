export function Formulario() {
  const formulario = {
    Nombre: <input id="1" type="name" placeholder="Nombre" onChange={function(e){console.log(e)}}></input>,
    Email: <input id="2" type="email" placeholder="Email" onChange={function(e){console.log(e)}}></input>,
    NombreSteam: <input id="3" type="nickname" placeholder="Nombre de steam" onChange={function(e){console.log(e)}}></input>,
  };
  return (
    <div>
      <center>
        <h2>Nombre</h2>
        <h2>{formulario.Nombre}</h2>
        <h2>Email</h2>
        {formulario.Email}
        <h2>Nombre steam</h2>
        {formulario.NombreSteam}
      </center>
    </div>
  );
}

function Informacion2() {
  return (
    <div>
      <h2>Nombre</h2>
      <input type="name"></input>
      <h2>Email</h2>
      <input type="email"></input>
      <h2>Nombre steam</h2>
      <input type="nickname"></input>
    </div>
  );
}

export function BasePag() {
  return (
    <div>
      <h1>Bienvenido a codigos steam</h1>
      <h2>Rellenar el siguiente formulario para continuar</h2>
    </div>
  );
}
