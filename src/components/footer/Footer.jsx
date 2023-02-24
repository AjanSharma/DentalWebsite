import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>Ajan Sharma</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#services'>Experience</a></li>
        <li><a href='#portfolio'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/ajan-sharma-13b200115/' target="_blank"><BsLinkedin/></a>
        <a href='https://www.facebook.com/ajan.sharma.3/' target='_blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/ajan_sharma/?next=%2F' target='_blank'><FiInstagram /></a>
        <a href='https://twitter.com/AjanSharma2' target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Portfolio of Ajan Sharma. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer