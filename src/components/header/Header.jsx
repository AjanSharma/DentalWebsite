import React from 'react'
import './Header.css'
import CTA from './CTA'
// import ME from '../../assests/me.png'
import ME from '../../assests/my.png'
import HeaderSocials from './HeaderSocials'
import img from '../../assests/img.png'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dr. Prabha Sharma</h1>
        <h5 className='text-light'>Dental Clinic</h5>
        <CTA />

        <HeaderSocials/>

        <div className="me">
          {/* <img src={ME} alt='me'/> */}
          <img src={img} alt='me' className='me_img'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header