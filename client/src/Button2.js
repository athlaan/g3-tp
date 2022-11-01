export function Datos16({ text }) {
  console.log(text);
  return (
    <div>
      <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviado");
      }}
    >
      <center>
      <button>{text}</button>
      </center>
    </form>
    </div>
  );
}

