import React from 'react';
import './App.css';

import Header from './components/Header';
import Seatings from './pages/Seatings';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Seatings /> */}
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
