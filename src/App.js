import React from 'react';
import NavBar from './components/NavBar';
import Home from './Home';
import Color from './Color';
import Services from './Services';
import TextLink from './components/TextLink';
import EmailLink from './components/EmailLink';
import AppointmentButton from './components/AppointmentButton';
import EmailSmallLink from './components/EmailSmallLink';
import './App.css';

function App() {
    return (
    <div className="App">
      <NavBar />
      <EmailSmallLink />
      <Home />
      <Color />
      <Services />
      <div style={{ padding: '9vh', width: '100%' }}></div>
      <TextLink />
      <EmailLink />
      <AppointmentButton />
    </div>
  );
};

export default App;
