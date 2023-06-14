import React, { useEffect, useState } from "react";
import "./Footer.scss";

function Footer() {
    const [bioskop, setBioskop] = useState([]);

    const fetchBioskop = () => {
        fetch("http://localhost:3100/bioskop", {
          method: "GET",
          headers: {
              'Access-Control-Allow-Origin': '*'
          }
      })
      .then((response) => response.json())
      .then((result) => {setBioskop(result.rows)})
      .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        fetchBioskop();
    }, []);

    return (
        <div className="footer">
            <h2>BIOSKOP MITRA</h2>
            <div className="container">
                {bioskop.map((item, index) => {
                    return (
                        <div className="cards" key={index}>
                            <h1>{item.b_nama}</h1>
                            <p>{item.b_alamat}</p>
                            <p>{item.b_kota}</p>
                            <p>{item.b_kontak}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Footer;
