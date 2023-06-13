import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import "./Seatings.scss";

const Seatings = (props) => {
  const [seatings, setSeatings] = useState([]);
  const [seatData, setSeatData] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const { props: sesi } = props;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // If the seat is already selected, deselect it
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Otherwise, select the seat
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = (seatData) => {
    let seats = [];

    for (let i = 0; i < seatData.length; i++) {
      const isSeatSelected = selectedSeats.includes(i);
      const seatClass = isSeatSelected ? 'selected' : '';
      
      seats.push(
        <div
        key={seatData[i].k_id_kursi}
        className={`seat ${seatClass}`}
        onClick={() => handleSeatClick(i)}
        >
          {seatData[i].k_nama}
        </div>
      );
    }

    return seats;
  };

    const fetchSeats = () => {
      fetch("http://localhost:3100/kursi-berdasarkan-id-jadwal?k_id_sesi_pemutaran=" + sesi.ss_id_sesi_pemutaran, {
          method: "GET",
          headers: {
              'Access-Control-Allow-Origin': '*'
          }
      })
      .then((response) => response.json())
      .then((result) => {setSeatData(result)})
      .catch((error) => console.log("error", error));
  }

  const fetchJadwal = () => {
    fetch("http://localhost:3100/jadwalbyid?j_id_jadwal=" + sesi.ss_id_jadwal, {
        method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then((response) => response.json())
    .then((result) => {setJadwal(result[0])})
    .catch((error) => console.log("error", error));
  }

  const getSelectedSeatsString = () => {
    let str_seats = '';
    for (let i = 0; i < selectedSeats.length; i++) {
      str_seats += seatData[selectedSeats[i]].k_nama;
      if (i !== selectedSeats.length - 1) {
        str_seats += ', ';
      }
    }
    return str_seats;
  }

  useEffect(() => {
    fetchSeats();
    fetchJadwal();
  }, []);

  const price = jadwal.j_harga;
  const totalprice = price * selectedSeats.length;

    return (
        <div className="seatings">
            <h1>Seatings</h1>
            <div className="screens">
              <div className="seat-picker">{renderSeats(seatData)}</div>
              <h3 className="screen">SCREEN</h3>
              {selectedSeats.length !== 0 ? (
                <>
                  <div className="seat-price">
                    <div className="seat-select">
                      <h1 className="seats-select">SEAT:{getSelectedSeatsString()}</h1>
                    </div>
                    <div className="totalprice">
                      <h1 className="price">
                        price:{"Rp."}
                        {totalprice}
                      </h1>
                    </div>
                  </div>
                  <Button variant="contained">Confirm</Button>
                </>
              ) : null}
            </div>
        </div>
    );
    }

export default Seatings;
