import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import "./Tickets.scss";

function Tickets() {
    const user = useSelector((state) => state.user);
    const [tickets, setTickets] = useState([]);

    const fetchTickets = () => {
        fetch("http://localhost:3100/transaksi-berdasarkan-id-customer?t_id_customer=" + user.c_id, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => response.json())
        .then((result) => {setTickets(result)})
        .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        fetchTickets();
    }, []);

    console.log(tickets)

    return (
        <div className="tickets">
            <h1>Tickets</h1>
            <div className="card_container">
                {tickets.map((ticket) => (
                    <div className="card">
                        <h2>{"Id customer: " + ticket.t_id_customer}</h2>
                        <p>{"Tanggal: " + ticket.t_waktu}</p>
                        <p>{"Total harga: Rp" + ticket.t_total_harga + ",-"}</p>
                        <p>{ticket.s_nama}</p>
                        <p>{ticket.k_nama}</p>
                    </div>
                ))}
                {/* <div className="card">
                    <h2>Movie name</h2>
                    <p>Date</p>
                    <p>Time</p>
                    <p>Studio</p>
                    <p>Seat</p>
                </div> */}
            </div>
        </div>
    );
}

export default Tickets;
