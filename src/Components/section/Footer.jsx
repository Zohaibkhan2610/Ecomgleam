import React from 'react'
import './footer.css'
import footlogo from './../Images/footer logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTiktok, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <>
        <div className="footer">
            <div>
                <img src={footlogo} alt="" />
                <div className="social-links">
                <FontAwesomeIcon icon={faXTwitter}/>
                    <FontAwesomeIcon icon={faYoutube}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <FontAwesomeIcon icon={faTiktok}/>
                </div>
            </div>
        </div>
    </>
  )
}
