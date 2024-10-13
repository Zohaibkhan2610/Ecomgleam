import React from 'react'
import './../../App.css'
import Home from './../Images/HomeCover.gif'
export default function Hero() {
  return (
    <>
      <div className="main container flex">
      <div className="main-text">
      <h1>All-in-one Team For Seamless ECommerce Management</h1>
      <p>
        EcomGleam offers efficient ecommerce solutions to optimize performance
        and drive growth. Collaborate with us to leverage expert strategies and
        cutting-edge technology tailored for your online success.
      </p>
      <div className="hero-btn">
        <button className='btn-1'>lets Chat</button>
        <button className='btn-2'>Our Stroy</button>
      </div>
      </div>
      <div className="main-img">
        <img src={Home} alt="Home cover" />
      </div>
    </div>
    </>
  )
}
