import React from "react";

import './Work.css'
import Work1 from './../Images/Work1.png'
import WorkM1 from './../Images/workM1.png'
import WorkM2 from './../Images/workM2.png'
import WorkM3 from './../Images/workM3.png'
import WorkStyle from './../Images/WorkStyle.png'
import WorkStyle2 from './../Images/WorkStyle2.png'
import Booking1 from './../Images/Booking1.png'
import Booking2 from './../Images/Booking2.png'
import Booking3 from './../Images/Booking3.png'
import Call from './../Images/Phone-call.svg'
import mail from './../Images/mail.svg'
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <>
      <div className="work1">
      <div className="work-header">
      <p className="head-text">Hear from our clients</p>
      </div>
        <div className="container">
            <img src={Work1} alt="Work cover" />
        </div>
      </div>
      <div className="work2">
      <div className="work-header">
      <p className="head-text">Our Working process</p>
      </div>
        <div className="container">
        <div className="work-card">
            <div className="work-card-img">
                <img src={WorkM1} alt="" />
            </div>
            <div className="work-card-text">
                <p className="p1">Insightful Consultation</p>
                <p className="p2">We delve into your business goals and challenges, conducting thorough analysis to uncover key insights.</p>
            </div>
        </div>
        <div className="work-Style">
            <img src={WorkStyle} alt="Work style" />
        </div>
        <div className="work-card">
            <div className="work-card-text">
                <p className="p1">Strategic Customization <span>and Execution</span></p>
                <p className="p2">Crafting and implementing bespoke strategies aligned with your objectives, optimizing for efficiency and growth.</p>
            </div>
            <div className="work-card-img">
                <img src={WorkM2} alt="" />
            </div>
        </div>
        <div className="work-Style">
            <img src={WorkStyle2} alt="Work style" />
        </div>
        <div className="work-card">
            <div className="work-card-img">
                <img src={WorkM3} alt="" />
            </div>
            <div className="work-card-text">
                <p className="p1">Transparent Accountability</p>
                <p className="p2">Vigilantly monitoring performance metrics, delivering clear, actionable insights to foster transparency and accountability.</p>
            </div>
        </div>
        </div>
      </div>
      <div className="Booking">
        <div className="container">
        <div className="flex">
        <div className="booking-main">
        <p>Book a time with us or drop in for a coffee</p>

        <img className="book-img" src={Booking1} alt="Aparment cover" />

        <div className="book-contact">
        <div className="mini-btn">
            <img className="f-icons" src={Call} alt="phone cover" />
            <p>+1 (215) 305-8197</p>
          </div>
        <div className="mini-btn">
        <img className="f-icons2" src={mail} alt="phone cover" />
            <p><span>info@ecomgleam.com</span>
            <span>career@ecomgleam.com</span></p>
          </div>
        </div>
        </div>
        <Link><img src={Booking2} alt="" /></Link>
        </div>
        </div>
        <div className="work-Style">
          <img src={Booking3} alt="" />
        </div>
      </div>
    </>
  );
}
