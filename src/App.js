import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './Home';
import Color from './Color';
import Services from './Services';
import ContactLinks from './components/ContactLinks';
import AppointmentsBar from './components/AppointmentsBar/AppointmentsBar';
import './App.css';

function App() {
    return (
    <div className="App">
      <NavBar />
      <Home />
      <Color />
      <Services />
      <ContactLinks />
      <p>404-202-3562</p>
      <AppointmentsBar />
    </div>
  );
};

export default App;
