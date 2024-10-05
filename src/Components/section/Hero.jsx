import React from 'react'
import './../../App.css'
import Home from './../Images/HomeCover.gif'
export default function Hero() {
  return (
    <div>
      <div className="main">
      <div className="main-text">
      <h1>All-in-one team for seamless eCommerce management</h1>
      <p>
        EcomGleam offers efficient ecommerce solutions to optimize performance
        and drive growth. Collaborate with us to leverage expert strategies and
        cutting-edge technology tailored for your online success.
      </p>
      <div className="hero-btn">
        <button>lets Chat</button>
        <button>Our Stroy</button>
      </div>
      </div>
      <div className="main-img">
        <img src={Home} alt="Home cover" />
      </div>
    </div>
    </div>
  )
}
