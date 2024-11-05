import React from "react";
import { Link } from "react-router-dom";
import './../About/About.css'
export default function Message() {
  return (
    <>
      <div className="message">
        <h1>LEAVE A MESSAGE FOR US</h1>
        <p>
          Contact Us Today,Our Team Is Ready To Support Your Goals,Whether
          You're Seeking Expert Guidance,CAmpaign Management or Strategic
          Consultation.
        </p>
        <div className="About6">
          <p className="About6-head">
            Take Your Brand to New Heights on Amazon
          </p>
          <Link className="btn3">Speak to ECom Gleam</Link>
        </div>
      </div>
    </>
  );
}
