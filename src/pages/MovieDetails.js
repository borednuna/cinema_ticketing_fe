import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import "./MovieDetails.scss";

function MovieDetails(props) {
    const { props: movie } = props;
    const [sesiPemutaran, setSesiPemutaran] = useState([]);

    const fetchSesiPemutaran = () => {
        fetch("http://localhost:3100/sesipemutaranbyid?ss_id_film=" + movie.f_id_film, {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => response.json())
        .then((result) => {setSesiPemutaran(result)})
        .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        fetchSesiPemutaran();
    }, [movie]);

    return (
        <div className="movieDetails">
            <h1>Movie Details</h1>
            <div className="details">
                <img src={movie.f_url_poster} alt="Spiderman" />
                <div className="details-text">
                    <h2>{movie.f_judul}</h2>
                    <p>Rating: {movie.f_rating}</p>
                    <p>Durasi: {movie.f_durasi} menit</p>
                    <p>Genre: {movie.f_genre}</p>
                    <p>Jadwal:</p>
                    <div className="jadwal">
                        {sesiPemutaran === undefined || Object.keys(sesiPemutaran).length === 0
                        ? null
                        : sesiPemutaran.map((sesi) => (
                            <div className="buttonsesi">
                                <p>{sesi.b_nama}</p>
                                <p>{sesi.b_kota}</p>
                                <p>{"Rp" + sesi.j_harga + ",-"}</p>
                                <a href={"/sesipemutaran/" + sesi.ss_id_sesi_pemutaran}><Button variant="contained">{sesi.j_waktu.slice(0, 10) + " " + sesi.j_waktu.slice(11, 19)}</Button></a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="details-section"></div>
        </div>
    );
}

export default MovieDetails;
