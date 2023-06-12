import React, {useEffect, useState} from "react";
import "./LandingPage.scss";

import Slider from "../components/Slider";
import Card from "../components/Card";

function LandingPage() {
    return (
        <div className="landingpage">
            <Slider />
            <h1>Now Playing</h1>
            <div className="cards">
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
            </div>
            <h1>Coming Soon</h1>
            <div className="cards">
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
                <a href="/moviedetails"><Card /></a>
            </div>
        </div>
    );
    }

export default LandingPage;