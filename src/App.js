import React from 'react';
import NavBar from './components/NavBar';
import AppointmentButton from './components/AppointmentButton';
import Home from './Home';
import Color from './Color';
import Services from './Services';
// import ContactButtons from './components/ContactButtons';
import './App.css';

function App() {
    return (
    <div className="App">
      <NavBar />
      {/* <ContactButtons /> */}
      <AppointmentButton />
      <Home />
      <Color />
      <Services />
    </div>
  );
};

export default App;
