import React from 'react';
import '../App.css'

const AppointmentButton = props => {

    const footerLink =     {
        position: 'fixed',
        zIndex: '1000 !important',
        bottom: 0,
        backgroundColor: '#c3122f',
        textAlign: 'center',
        color: 'whitesmoke',
        textTransform: 'uppercase',
        height: '7vh',
        padding: '2vh 3vw',
        display: 'inline-block',
        fontWeight: '600',
        letterSpacing: '.3vw',
        width: '100%',
        border: 'none',
        cursor: 'pointer',
    }

    return(
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <a 
                style={footerLink} 
                href="https://squareup.com/appointments/book/01469063-8cb8-4b57-9076-51933d0b1e9a/61SVRS8W8BGB2/services"
                id="footer"
                >make an appointment
            </a>
        </div>
    )
}

export default AppointmentButton;