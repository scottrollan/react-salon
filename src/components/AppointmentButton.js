import React from 'react';
import TextLink from './TextLink';
import EmailLink from './EmailLink';

const AppointmentButton = props => {

    const footerLink =     {
        position: 'fixed',
        zIndex: '9999 !important',
        bottom: 0,
        left: 0,
        backgroundColor: '#c3122f',
        fontSize: 'calc(28px + .8vw)',
        textAlign: 'center',
        color: 'whitesmoke',
        textTransform: 'uppercase',
        height: '8vh',
        minHeight: '55px',
        padding: '.6vh 0',
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
                <TextLink />
                <EmailLink />
            </span>
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