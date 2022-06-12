import React from "react";
import "./mailList.css";
export const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time and Money</h1>
      <span className="mailDesc">Signup and well send you details</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
