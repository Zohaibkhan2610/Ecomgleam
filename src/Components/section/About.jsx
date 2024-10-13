import React from 'react'
import './../../App.css'
import About1 from './../Images/About1.png'
export default function About() {
  return (
    <>
    <div className="container main flex">
      <div className="main-text">
      <h1>WE ARE <span>Ecom Gleam</span></h1>
        <p>We are Ecom Gleam. Here, we will illuminate the path for your e-commerce successes on Amazon. We are committed to empowering Amazon sellers by providing them with customized solutions and unwavering assistance.</p>
      <div className="hero-btn">
        <button className='btn-1'>lets Chat</button>
        <button className='btn-2'>Our Stroy</button>
      </div>
      </div>
      <div className="main-img">
      <img src={About1} alt="About cover" /></div>
    </div>
    </>
  )
}
