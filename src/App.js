import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Seatings from './pages/Seatings';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path='/seatings' element={<Seatings/>} />
          <Route path='/moviedetails' element={<MovieDetails/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
