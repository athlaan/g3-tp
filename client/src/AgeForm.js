import { useEffect ,useState } from "react";
import axios from "axios";
import Games7 from ".//Games7";
import Games16 from ".//Games16";

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


const AgeData16 = (props) => {

  const [hidden, setHidden] = useState(true);

  return (
    <div>
      {hidden ? (<button onClick={() => setHidden((s) => !s)}>
        A partir de 16 años
      </button>) : null}
      {!hidden ? (<Games16 />) : null}
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
      {!hidden ? (<Games7 />) : null}
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
