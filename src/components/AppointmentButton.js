import React from 'react';


const AppointmentButton = props => {

    const footerLink =     {
        position: 'fixed',
        zIndex: '9999 !important',
        bottom: 0,
        left: 0,
        backgroundColor: '#c3122f',
        fontSize: '5vh',
        lineHeight: '8vh',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'whitesmoke',
        textTransform: 'uppercase',
        height: '8vh',
        maxHeight: '8vh',
        minHeight: '8vh',
        display: 'inline-block',
        fontWeight: '600',
        letterSpacing: '.3vw',
        width: '100%',
        border: 'none',
        cursor: 'pointer',
    }

    return(
        <footer>
            <span>
                <a 
                    style={footerLink} 
                    href="https://squareup.com/appointments/book/01469063-8cb8-4b57-9076-51933d0b1e9a/61SVRS8W8BGB2/services"
                    id="footer"
                    >make an appointment
                </a>
            </span>
        </footer>        
    )
}

export default AppointmentButton;