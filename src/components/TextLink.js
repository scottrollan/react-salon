import React from 'react';

const TextLink = props => {
    const textLink={
        position: 'fixed',
        // top: '9vh',
        left: '-1vw',
        width: 'auto',
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
        <a href="sms://4042023562/"
            style={textLink}
            id="textLink"
            >Text Barry
        </a>
    )
};

export default TextLink;