import React from "react";
import "./Card.scss";

import Spiderman from "../img/spiderman.jpg";

function Card() {
  return (
    <div className="card">
        <img src={Spiderman} alt="placeholder" />
        <h1>Spiderman</h1>
    </div>
  );
}

export default Card;