import React from 'react';
import Button from 'react-bootstrap/Button';

const EmailSmallLink = () => {

    const emailSmallLink={
        position: 'fixed',
        top: '12vh',
        right: '-1vw',
        width: '8vw',
        height: 'auto',
        textAlign: 'center',
        padding: '6.5px 2vw 6.5px 6.5px',
        background: 'whitesmoke',
        fontSize: '3vh',
        color: '#c4122f',    
        border: 'solid .8px #c4122f',
        margin: '0 0 2vh 0',
        cursor: 'pointer',
        zIndex: 9999
    }

    return(
        <a href="mailto:barry@barryrollanstudio.com?Subject=Hey%20Barry...">
        <Button 
            style={emailSmallLink}
            id="emailSmallLink"
            >Email Barry
        </Button>
        </a>
    )
};

export default EmailSmallLink;