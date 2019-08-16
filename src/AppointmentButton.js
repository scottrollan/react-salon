import React from 'react';
import './App.css'

const AppointmentButton = props => {

    const button =     {
        position: 'fixed',
        zIndex: '1000 !important',
        top: '1vh !important',
        right: '5vw !important',
        backgroundColor: '#c3122f',
        textAlign: 'center',
        color: 'whitesmoke',
        textTransform: 'uppercase',
        padding: '1.2vh 3vw',
        display: 'inline-block',
        fontWeight: '600',
        letterSpacing: '.3vw',
        width: 'auto',
        cursor: 'pointer',
}

    return(
        <div style={{ textAlign: 'center'}}>
            <a style={button} href="schedule.html">make an appointment</a>
        </div>
    )
}

export default AppointmentButton;