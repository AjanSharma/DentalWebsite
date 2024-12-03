import React from 'react'
import './About.css'
// import ME from '../../assests/me-about.jpg'
import ME from '../../assests/my_about2.jpg'
import about_dentist_img from '../../assests/about-dentist-img.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt='AboutImage' className='my_image'/> */}
            <img src={about_dentist_img} alt='AboutImage' className='my_image'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Address</h5>
              <small>G-18, Block G, Sector - 12, Noida, Uttar Pradesh 201301</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Amenities</h5>
              <small>Gender-neutral toilets, </small>
              <small>Wheelchair accessible entrance</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Experience</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <h3>From Dr. Prabha Sharma</h3>
          <p>
            With Dr. Prabha Sharma, a bright smile is right around the corner. Dr. Prabha Sharma is your go to neighborhood dentist in Noida. When it comes to your
            teeth and oral health, you need to have a fantastic team beside you. Here, that is what you will get! 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About