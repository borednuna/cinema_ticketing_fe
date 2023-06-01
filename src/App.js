import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Seatings from './pages/Seatings';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Seatings /> */}
      <LandingPage />
    </div>
  );
}

export default App;
