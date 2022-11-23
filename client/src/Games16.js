import { useState, useEffect } from "react";
import axios from "axios";

const Games16 = () => {

    const [games, SetGames] = useState([]);

        useEffect(() => {
          axios.get('site/games')
            .then(res => {
              console.log(res.data);
              SetGames(res.data);
            })
        }, [])


};

export default Games16;