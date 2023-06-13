import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './persistor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Seatings from './pages/Seatings';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';
import Tickets from './pages/Tickets';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path='/seatings' element={<Seatings/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/tickets' element={<Tickets/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/signin' element={<SignIn/>} />
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
      </PersistGate>
    </Provider>
  );
}

export default App;
