import React from "react";
import "./Card.scss";

import Spiderman from "../img/spiderman.jpg";

function Card(props) {
  const { props: movie } = props;
  return (
    <div className="card">
        <img src={movie.f_url_poster} alt="placeholder" />
        <h1>{movie.f_judul}</h1>
    </div>
  );
}

export default Card;