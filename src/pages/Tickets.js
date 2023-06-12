import React from "react";
import "./Tickets.scss";

function Tickets() {
    return (
        <div className="tickets">
            <h1>Tickets</h1>
            <div className="card_container">
                <div className="card">
                    <h2>Movie name</h2>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Studio</p>
                    <p>Seat</p>
                </div>
            </div>
        </div>
    );
}

export default Tickets;
