import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ajan-sharma-13b200115/' target="_blank"><BsLinkedin/></a>
        <a href='https://www.instagram.com/ajan_sharma/?next=%2F' target="_blank"><FiInstagram /></a>
        <a href='https://twitter.com/AjanSharma2' target="_blank"><IoLogoTwitter /></a>
    </div>
  )
}

export default HeaderSocials