import React from 'react';
import NavBar from './components/NavBar';
import Home from './Home';
import Color from './Color';
import Services from './Services';
// import EmailLink from './components/EmailLink';
// import TextLink from './components/TextLink';
import AppointmentButton from './components/AppointmentButton';
import './App.css';

function App() {
    return (
    <div className="App">
      <NavBar />
      {/* <EmailLink />
      <TextLink /> */}
      <Home />
      <Color />
      <Services />
      <AppointmentButton />
    </div>
  );
};

export default App;
