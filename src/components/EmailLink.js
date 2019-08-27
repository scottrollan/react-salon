import React from 'react';

const EmailLink = () => {
    const emailLink={
        position: 'fixed',
        top: '9vh',
        right: '-1vw',
        width: 'auto',
        minWidth: 'calc(140px + 2vw)',
        height: 'auto',
        textAlign: 'center',
        padding: '6.5px 1vw 6.5px 6.5px',
        background: 'rgba(245, 245, 245, .3)',
        fontSize: 'calc(28px + 1vh)',
        color: '#c4122f',    
        border: 'solid .8px #c4122f',
        margin: '0 0 2vh 0',
        cursor: 'pointer',
    }

    return(
        <a href="mailto:barry@barryrollanstudio.com" 
            style={emailLink}
            id="emailLink"
            >Email Barry
        </a>
    )
};

export default EmailLink;