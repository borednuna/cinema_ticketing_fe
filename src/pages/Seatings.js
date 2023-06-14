import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Seatings.scss";

const Seatings = (props) => {
  const user = useSelector((state) => state.user);
  const [seatData, setSeatData] = useState([]);
  const [jadwal, setJadwal] = useState([]);
  const [payment, setPayment] = useState("Transfer bank");
  const { props: sesi } = props;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const postTransaction = (data) => {
    fetch('http://localhost:3100/transaksi-baru', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

  const handleTransaction = () => {
    let data = {
      t_waktu: "2023-05-18 11:00:00",
      t_total_harga: totalprice,
      t_status: "Berhasil",
      t_metode_pembayaran: payment,
      t_id_customer: user.c_id
    }
    postTransaction(data);
    console.log(JSON.stringify(data));
  }
    

  const handleSeatClick = (seatNumber) => {
  if (seatData[seatNumber].k_status === "Terisi") {
    // If the seat is already reserved, do nothing
    return;
  } else if (selectedSeats.includes(seatNumber)) {
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
      let seatClass = isSeatSelected ? 'selected' : '';
      
      if (seatData[i].k_status === "Terisi") {
        seatClass = 'reserved';
      }
      
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
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel value="dana" control={<Radio />} label="Dana" onClick={() => {setPayment("Dana")}} />
                      <FormControlLabel value="ovo" control={<Radio />} label="Ovo" onClick={() => {setPayment("Ovo")}} />
                      <FormControlLabel value="transfer bank" control={<Radio />} label="Transfer Bank" onClick={() => {setPayment("Transfer bank")}} />
                      <FormControlLabel value="gopay" control={<Radio />} label="Gopay" onClick={() => {setPayment("Gopay")}} />
                    </RadioGroup>
                  </FormControl>
                  <Button onClick={handleTransaction} variant="contained">Confirm</Button>
                </>
              ) : null}
            </div>
        </div>
    );
    }

export default Seatings;
