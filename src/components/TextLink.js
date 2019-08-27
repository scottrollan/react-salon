import React from 'react';
import Button from 'react-bootstrap/Button';

const TextLink = props => {
    const textLink={
        position: 'fixed',
        top: '10vh',
        left: '-1vw',
        width: '14vw',
        minWidth: 'calc(140px + 2vw)',
        height: 'auto',
        textAlign: 'center',
        padding: '6.5px 6.5px 6.5px 1vw',
        background: 'rgba(245, 245, 245, .3)',
        fontSize: '3vh',
        color: '#c4122f',    
        border: 'solid .8px #c4122f',
        margin: '0 0 2vh 0',
        cursor: 'pointer',
        visibility: 'hidden'
    }

    return(
        <a href="sms:1-404-202-3562">
        <Button 
            style={textLink}
            id="textLink"
            >Text Barry
        </Button>
        </a>
    )
};

export default TextLink;