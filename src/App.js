import React from 'react';
import NavBar from './components/NavBar';
import Home from './Home';
import Color from './Color';
import Services from './Services';
import EmailLink from './components/EmailLink';
import TextLink from './components/TextLink';
import AppointmentButton from './components/AppointmentButton';
import './App.css';

function App() {
    return (
    <div className="App">
      <NavBar />
      <Home />
      <Color />
      <Services />
      <EmailLink />
      <TextLink />
      <p style={{ margin: '0 0 10vh' }}>404-202-3562</p>
      <AppointmentButton />
    </div>
  );
};

export default App;
