import { useEffect ,useState } from "react";

const AgeForm = (props) => {

  return (
    <div>
      <center>
      <AgeData16 />
      <AgeData7 />
      </center>
    </div>
  );
}

function AgeDataSmall() {
  return (
    <div>
      <h1>Juegito 1</h1>
      <p>Ta piola</p>
      <h1>Juegito 2</h1>
      <p>Un poco mas piola</p>
      <h1>Juegito 3</h1>
      <p>Por tirar este</p>
    </div>
  );
}

function AgeDataBig()  {
  return (
    
    useEffect(() => {
      axios.get('site/games')
        .then(res => {
          console.log(res.data);
        })
    })
    
  );
};

const AgeData16 = (props) => {

  const [hidden, setHidden] = useState(true);

  return (
    <div>
      {hidden ? (<button onClick={() => setHidden((s) => !s)}>
        A partir de 16 años
      </button>) : null}
      {!hidden ? (<AgeDataBig />) : null}
    </div>
  );
};


const AgeData7 = (props) => {

  const [hidden, setHidden] = useState(true);

  return (
    <div>
      {hidden ? (<button onClick={() => setHidden((s) => !s)}>
        A partir de 7 años
      </button>) : null}
      {!hidden ? (<AgeDataSmall />) : null}
    </div>
  );
};

/*const AgeData7 = (props) => {
  const [DisplayedItems, setDisplayedItems] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    console.log(typeof DisplayedItems);
    setDisplayedItems(AgeDataOne);
  }

  return (
    <div>
      <button onClick={(event) => handleClick(event)}>
        A partir de 7 años
      </button>
      {DisplayedItems}
    </div>
  );
};*/

export default AgeForm;
