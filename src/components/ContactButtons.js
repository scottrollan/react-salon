import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css'

const ContactButtons = props => {
    const textLink={
        visibility: 'hidden',
        position: 'fixed',
        top: '62vh',
        left: '2vw',
        height: 'auto',
        width: '8vw',
        display: 'none',
        textAlign: 'center',
        padding: '6.5px',
        background: 'whitesmoke',
        fontSize: '20px',
        color: '#c4122f',    
        border: 'solid .8px #c4122f',
        margin: '0 0 2vh 0',
        cursor: 'pointer',
    }    
    const emailLink={
        visibility: 'hidden',
        position: 'fixed',
        top: '62vh',
        right: '2vw',
        height: 'auto',
        width: '8vw',
        display: 'none',
        textAlign: 'center',
        padding: '6.5px',
        background: 'whitesmoke',
        fontSize: '20px',
        color: '#c4122f',    
        border: 'solid .8px #c4122f',
        margin: '0 0 2vh 0',
        cursor: 'pointer',
    }    
    const emailSmallLink={
        position: 'fixed',
        top: '12vh',
        right: '1vw',
        width: '8vw',
        height: 'auto',
        textAlign: 'center',
        padding: '6.5px',
        background: 'whitesmoke',
        fontSize: '20px',
        color: '#c4122f',    
        border: 'solid .8px #c4122f',
        margin: '0 0 2vh 0',
        cursor: 'pointer',
    }
    return(
        <span>
            <a href="sms:1-404-202-3562">
            <Button 
                style={textLink}
                id="textLink"
                >Text Barry
            </Button>
            </a>
            <a href="mailto:barry@barryrollanstudio.com?Subject=Hey%20Barry...">
            <Button 
                style={emailLink}
                id="emailLink"
                >Email Barry
            </Button>
            </a>            
            <a href="mailto:barry@barryrollanstudio.com?Subject=Hey%20Barry...">
            <Button 
                style={emailSmallLink}
                id="emailSmallLink"
                >Email Barry
            </Button>
            </a>
        </span>

    )

};

export default ContactButtons;