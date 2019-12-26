import React from "react";

const ContactLinks = () => {
  return (
    <div style={{ margin: '5px 0' }}>
      <a
        href="mailto:barry@barryrollanstudio.com"
        style={{ clear: "both", display: "inline-block" }}
        id="emailLink"
      >
        Email Barry
      </a>
      <a href="sms:4042023562" style={{ display: "none" }} id="textLink">
        Text Barry
      </a>
    </div>
  );
};

export default ContactLinks;
