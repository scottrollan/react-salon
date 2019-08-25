import React from 'react';
import Button from 'react-bootstrap/Button';

const TextLink = props => {
    

    return(
            <a href="sms:1-404-202-3562">
            <Button 
                id="textLink"
                className="link"
                >Text Barry
            </Button>
            </a>
    )
};

export default TextLink;