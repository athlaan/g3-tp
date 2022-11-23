import { useEffect, useState } from "react";
import axios from "axios";

const Games7 = () => {

    const [games, SetGames] = useState([]);
    
        useEffect(() => {
          axios.get('site/gamesover7')
            .then(res => {
              console.log(res.data);
              SetGames(res.data);
            });
        }, []);
  
        return (
            <p>juegito.com</p>
        );
} 

export default Games7;