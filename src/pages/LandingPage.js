import React, {useEffect, useState} from "react";
import "./LandingPage.scss";

import Slider from "../components/Slider";
import Card from "../components/Card";

function LandingPage() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [comingSoon, setComingSoon] = useState([]);

    const fetchNowPlaying = () => {
        fetch("http://localhost:3100/film-yang-sedang-tayang", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => response.json())
        .then((result) => {setNowPlaying(result.rows)})
        .catch((error) => console.log("error", error));
    }

    const fetchComingSoon = () => {
        fetch("http://localhost:3100/film-yang-akan-tayang", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => response.json())
        .then((result) => {setComingSoon(result.rows)})
        .catch((error) => console.log("error", error));
    }

    useEffect(() => {
        fetchNowPlaying();
        fetchComingSoon();
    }, [])

    return (
        <div className="landingpage">
            <Slider />
            <h1>Now Playing</h1>
            <div className="cards">
                {nowPlaying === undefined || Object.keys(nowPlaying).length === 0
                    ? null
                    : nowPlaying.map((movie) => (
                        <a href={"/moviedetails/" + movie.f_id_film}><Card props={movie} /></a>
                    ))}
            </div>
            <h1>Coming Soon</h1>
            <div className="cards">
                {comingSoon === undefined || Object.keys(comingSoon).length === 0
                    ? null
                    : comingSoon.map((movie) => (
                        <a href={"/moviedetails/" + movie.f_id_film}><Card props={movie} /></a>
                    ))}
            </div>
        </div>
    );
    }

export default LandingPage;