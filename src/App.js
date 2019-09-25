import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './Home';
import Color from './Color';
import Services from './Services';
import ContactLinks from './components/ContactLinks';
import AppointmentButton from './components/AppointmentButton';
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
      <AppointmentButton />
    </div>
  );
};

export default App;
