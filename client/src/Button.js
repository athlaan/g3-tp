import Games7 from "./7.js"

export function Datos7({ text }) {
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
      <button onClick={function Games7(){
            return <h1>hello world!</h1>
        }}>{text}</button>
      </center>
    </form>
    </div>
  );
}
