import React from 'react';
import Button from 'react-bootstrap/Button';

const EmailLink = () => {
    return(
        <a href="mailto:barry@barryrollanstudio.com?Subject=Hey%20Barry...">
        <Button 
            id="emailLink"
            className="link"
            >Email Barry
        </Button>
        </a> 
    )
};

export default EmailLink;