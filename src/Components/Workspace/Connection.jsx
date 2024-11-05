import React from 'react'
import './Conection.css'
import Partner1 from './../Images/partner1.png'
import Partner2 from './../Images/partner2.png'
import Partner3 from './../Images/partner3.png'
import Partner4 from './../Images/partner4.png'
import Partner5 from './../Images/partner5.png'
import Partner6 from './../Images/partner6.png'
import Partner7 from './../Images/partner7.png'
import Person1 from './../Images/person1 (1).png'
import Person2 from './../Images/person1 (2).png'
import Client from './../Images/client.png'
import Approach1 from './../Images/approach1.svg'
import Approach2 from './../Images/approach2.svg'
import Approach3 from './../Images/approach3.svg'
import Approach4 from './../Images/approach4.svg'
import Approach5 from './../Images/approach5.svg'
import { Link } from 'react-router-dom'
export default function Connection() {
  return (
    <>
        <div className="Conection">
        <div className="Partner">
        <h1>Our Partners</h1>
        <div className="Partners-logo">
          <div className="flex">
          <div className="Partners-logo1">
            <div><img src={Partner1} alt="" /></div>
            <div><img src={Partner2} alt="" /></div>
            <div><img src={Partner3} alt="" /></div>
            <div><img src={Partner4} alt="" /></div>
            <div><img src={Partner5} alt="" /></div>
            <div><img src={Partner6} alt="" /></div>
            <div><img src={Partner7} alt="" /></div>
          </div>
          </div>
          <div className="flex">
          <div className="Partners-logo1 Partners-logo2">
            <div><img src={Partner1} alt="" /></div>
            <div><img src={Partner2} alt="" /></div>
            <div><img src={Partner3} alt="" /></div>
            <div><img src={Partner4} alt="" /></div>
            <div><img src={Partner5} alt="" /></div>
            <div><img src={Partner6} alt="" /></div>
            <div><img src={Partner7} alt="" /></div>
          </div>
          </div>
        </div>
        </div>
        <div className="team">
        <h1>Meet the team</h1>
        <div className="person">
          <div className="man">
            <img src={Person1} alt="" />
          </div>
          <div className="man">
            <img src={Person2} alt="" />
          </div>
        </div>
        </div>
        <div className="client">
        <h1>Our Clients</h1>
        <div className="clients">
        <img src={Client} alt="" />
        </div>
        </div>
        <div className="client">
        <h1>
        Let’s bring your next project to life, together</h1>
        <div className="clients">
        <Link className='btn3'>Speak to ECom Gleam</Link>
        </div>
        </div>
        <div className="approach">
        <h1>Our approach</h1>
          <div className="appro">
          <div className="appro-card up">
          <img src={Approach1} alt="" />
          <p><span>Revenue</span><span>first</span></p>
          </div>
          <div className="appro-card up">
          <img src={Approach2} alt="" />
          <p><span>Dedicated</span><span>management</span></p>
          </div>
          <div className="appro-card up">
          <img src={Approach3} alt="" />
          <p><span>Quality</span><span>assurance</span></p>
          </div>
          <div className="appro-card bottom">
          <img src={Approach4} alt="" />
          <p><span>On-demand</span><span>support</span></p>
          </div><div className="appro-card bottom">
          <img src={Approach5} alt="" />
          <p>Authenticity</p>
          </div>
          </div>
        </div>
        </div>
    </>
  )
}
