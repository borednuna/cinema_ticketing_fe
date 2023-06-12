import React from "react";
import Button from '@mui/material/Button';
import "./MovieDetails.scss";

import Spidey from "../img/spiderman.jpg";

function MovieDetails() {
    return (
        <div className="movieDetails">
            <h1>Movie Details</h1>
            <div className="details">
                <img src={Spidey} alt="Spiderman" />
                <div className="details-text">
                    <h2>Spiderman</h2>
                    <p>Rating</p>
                    <p>Durasi</p>
                    <p>Genre</p>
                    <p>Jadwal</p>
                    <div className="jadwal">
                        <a href="/seatings"><Button variant="contained">10.30</Button></a>
                        <a href="/seatings"><Button variant="contained">10.30</Button></a>
                        <a href="/seatings"><Button variant="contained">10.30</Button></a>
                        <a href="/seatings"><Button variant="contained">10.30</Button></a>
                    </div>
                </div>
            </div>
            <div className="details-section"></div>
        </div>
    );
}

export default MovieDetails;
