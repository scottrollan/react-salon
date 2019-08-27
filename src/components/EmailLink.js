import React from 'react';
import Button from 'react-bootstrap/Button';

const EmailLink = () => {
    const emailLink={
        position: 'fixed',
        top: '10vh',
        right: '-1vw',
        width: 'auto',
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
    }

    return(
        <a href="mailto:barry@barryrollanstudio.com?Subject=Hey%20Barry...">
        <Button 
            style={emailLink}
            id="emailLink"
            >Email Barry
        </Button>
        </a>
    )
};

export default EmailLink;