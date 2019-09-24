import React from 'react';

const TextLink = props => {
    const textLink={
        display: 'none',
    }

    return(
        <a href="sms:4042023562"
            style={textLink}
            id="textLink"
            >Text Barry
        </a>
    )
};

export default TextLink;