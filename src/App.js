import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Seatings from './pages/Seatings';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import Tickets from './pages/Tickets';

function App() {
  const [movies, setMovies] = useState([]);
  const [sesiPemutaran, setSesiPemutaran] = useState([]);

  const fetchSesiPemutaran = () => {
    fetch("http://localhost:3100/allsesipemutaran", {
      method: "GET",
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  })
  .then((response) => response.json())
  .then((result) => {setSesiPemutaran(result.rows)})
  .catch((error) => console.log("error", error));
}

    const fetchMovies = () => {
        fetch("http://localhost:3100/allmovies", {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then((response) => response.json())
        .then((result) => {setMovies(result.rows)})
        .catch((error) => console.log("error", error));
    }

    useEffect(() => {
      fetchMovies();
      fetchSesiPemutaran();
    }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path='/seatings' element={<Seatings/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/tickets' element={<Tickets/>} />
          {movies === undefined || Object.keys(movies).length === 0
            ? null
            : movies.map((movie) => (
                <Route
                  path={'/moviedetails/' + movie.f_id_film}
                  element={<MovieDetails props={movie} />}
                />
              ))}
          {sesiPemutaran === undefined || Object.keys(sesiPemutaran).length === 0
            ? null
            : sesiPemutaran.map((sesi) => (
                <Route
                  path={'/sesipemutaran/' + sesi.ss_id_sesi_pemutaran}
                  element={<Seatings props={sesi} />}
                />
              ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
