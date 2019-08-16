import React from 'react';
import NavBar from './NavBar';
// import Home from './Home';
import Color from './Color';
import './App.css';
import AppointmentButton from './AppointmentButton';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppointmentButton/>
      {/* <Home /> */}
      <Color/>

    </div>
  );
}

export default App;
