import React from 'react';
import Button from 'react-bootstrap/Button';

const EmailLink = () => {
    const emailSmallLink={
        position: 'fixed',
        top: '10vh',
        right: '-1vw',
        width: '14vw',
        minWidth: 'calc(140px + 2vw)',
        height: 'auto',
        textAlign: 'center',
        padding: '6.5px 1vw 6.5px 6.5px',
        background: 'rgba(245, 245, 245, .3)',
        fontSize: '3vh',
        color: '#c4122f',    
        border: 'solid .8px #c4122f',
        margin: '0 0 2vh 0',
        cursor: 'pointer',
        zIndex: 9998
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

export default EmailLink;