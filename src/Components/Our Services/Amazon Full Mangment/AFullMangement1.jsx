import React, { useState } from 'react'
import LineDiv from "../lineDiv";

export default function AFullMangement1() {
    const [activeHover, setActiveHover] = useState();
  const deActiveHover = () => setActiveHover(!activeHover);
  const handleActiveHover = (index) => {
    setActiveHover(index);
  };
  return (
    <>
    <div className="head-write">
    <p className="ourService">What Includes in Our Services</p>
    </div>
    <div className="wherehouse">
    <div
        className="hover-card"
        onMouseEnter={() => handleActiveHover(0.5)}
        onMouseLeave={deActiveHover}
      >
        <p> Brand Strategy and Development</p>
        <div
          className={
            activeHover === 0.5 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title"> Brand Strategy and Development</p>
          <p className="hover-main-card-para">
            <ul>
              <li>Brand Identity Creation</li>
              <li>Brand Positioning</li>
              <li>Brand Messaging</li>
            </ul>
          </p>
        </div>
      </div>
      <div
        className="hover-card"
        onMouseEnter={() => handleActiveHover(0)}
        onMouseLeave={deActiveHover}
      >
        <p>Product Development and Optimization</p>
        <div
          className={
            activeHover === 0 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title">Product Development and Optimization</p>
          <p className="hover-main-card-para">
            <ul>
              <li>Product Research</li>
              <li>Product Sourcing</li>
              <li>Product Sourcing Optimization</li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="hover-card"
        onMouseLeave={deActiveHover}
        onMouseEnter={() => handleActiveHover(1)}
      >
        <p>Marketing and Advertising</p>
        <div
          className={
            activeHover === 1 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title">Marketing and Advertising</p>
          <p className="hover-main-card-para">
            <ul>
              <li>   SEO Optimization      </li>
              <li> PPC Advertising</li>
              <li>Social Media Marketing</li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="hover-card"
        onMouseLeave={deActiveHover}
        onMouseEnter={() => handleActiveHover(2)}
      >
        <p>Inventory Management and Fulfillment</p>
        <div
          className={
            activeHover === 2 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title">Inventory Management and Fulfillment</p>
          <p className="hover-main-card-para">
            <ul>
              <li>   Fulfillment Services   </li>
              <li>inventory Planning </li>
              <li>Supplier Management</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <LineDiv />

    <div className="wherehouse">
      <div
        className="hover-card"
        onMouseEnter={() => handleActiveHover(3)}
        onMouseLeave={deActiveHover}
      >
        <p>Customer Service and Support</p>
        <div
          className={
            activeHover === 3 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title">Customer Service and Support</p>
          <p className="hover-main-card-para">
            <ul>
              <li>Customer Support    </li>
              <li>Feedback Analysis</li>
              <li>Customer Relationship Management</li>
            </ul>
          </p>
        </div>
      </div>
      <div
        className="hover-card"
        onMouseEnter={() => handleActiveHover(4)}
        onMouseLeave={deActiveHover}
      >
        <p>Analytics and Reporting</p>
        <div
          className={
            activeHover === 4 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title">Analytics and Reporting</p>
          <p className="hover-main-card-para">
            <ul>
              <li>   Performance Tracking    </li>
              <li>Data Analysis</li>
              <li>Reporting</li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="hover-card"
        onMouseLeave={deActiveHover}
        onMouseEnter={() => handleActiveHover(5)}
      >
        <p>Compliance and Regulatory Adherence</p>
        <div
          className={
            activeHover === 5 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title">Compliance and Regulatory Adherence</p>
          <p className="hover-main-card-para">
            <ul>
              <li> Amazon Policies  </li>
              <li>Regulatory Compliance</li>
              <li>Risk Managemen</li>
            </ul>
          </p>
        </div>
      </div>

      <div
        className="hover-card"
        onMouseLeave={deActiveHover}
        onMouseEnter={() => handleActiveHover(6)}
      >
        <p>Optimization and Growth</p>
        <div
          className={
            activeHover === 6 ? "hover-main-card active" : "hover-main-card"
          }
        >
          <p className="hover-main-card-Title">Optimization and Growth</p>
          <p className="hover-main-card-para">
            <ul>
              <li>Continuous Improvement</li>
              <li>Growth Planning</li>
              <li>Scaling Support</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </>
  )
}
