import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpg'
import IMG3 from '../../assests/portfolio3.jpg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'
import {BiCheck} from 'react-icons/bi'
import IDS from '../../assests/IDS.jpg'
import PortfolioProj from '../../assests/portfolioProj.png'
import airbnb from '../../assests/airbnb.png'
import OpenstackPortfolio from '../../assests/OpenstackPortfolio.png'
// import AndroidPortfolio from '../../assests/androidPortfolio.png'
import moneyMarket from '../../assests/moneyMarket.jpg'
import SSHPortfolio from '../../assests/sshPortfolio.png'

const data = [
  {
    id: 1,
    image: moneyMarket,
    title: 'Refactor Trading Application',
    github: '#contact',
    demo: '0'
  },
  {
    id: 2,
    image: PortfolioProj,
    title: 'Portfolio',
    github: '#',
    demo: '1'
  },
  {
    id: 3,
    image: airbnb,
    title: 'Airbnb Clone',
    github: 'https://airbnb-clone-ten-plum.vercel.app/',
    demo: '1'
  },
  {
    id: 4,
    image: SSHPortfolio,
    title: 'SSH implementation for device Configuration',
    github: 'https://github.com/AjanSharma/ssh-automation-switches',
    demo: '1'
  },
  {
    id: 5,
    image: OpenstackPortfolio,
    title: 'Virtual Network Functions (VNF) automation in Openstack',
    github: '#contact',
    demo: '0'
  },
  {
    id: 6,
    image: IDS,
    title: 'Supervised Intrusion Detection System for Smart Home IoT devices',
    github: '#contact',
    demo: '0'
  }
]

// const data = [
//   {
//     id: 1,
//     image: PortfolioProj,
//     title: 'Portfolio',
//     github: '#',
//     demo: '1'
//   },
//   {
//     id: 2,
//     image: IDS,
//     title: 'Supervised Intrusion Detection System for Smart Home IoT devices',
//     github: '#contact',
//     demo: '0'
//   },
//   {
//     id: 3,
//     image: airbnb,
//     title: 'Airbnb Clone',
//     github: 'https://airbnb-clone-ten-plum.vercel.app/',
//     demo: '1'
//   },
//   {
//     id: 4,
//     image: OpenstackPortfolio,
//     title: 'Virtual Network Functions (VNF) automation in Openstack',
//     github: '#contact',
//     demo: '0'
//   },
//   {
//     id: 5,
//     image: moneyMarket,
//     title: 'Refactor Trading Application',
//     github: '#contact',
//     demo: '0'
//   },
//   {
//     id: 6,
//     image: SSHPortfolio,
//     title: 'SSH implementation for device Configuration',
//     github: 'https://github.com/AjanSharma/ssh-automation-switches',
//     demo: '1'
//   }
// ]


// const data = [
//   {
//     id: 1,
//     image: PortfolioProj,
//     title: 'Portfolio',
//     date: 'Sep 2022 - Oct 2022',
//     first_p: 'Build an responsive online resume/ website using tech stack – React, JavaScript, HTML and CSS.',
//     second_p: 'Here I will add URL once the website is hosted.'
//   },
//   {
//     id: 2,
//     image: IDS,
//     title: 'Supervised Intrusion Detection System for Smart Home IoT devices',
//     date: 'Sep 2020 - Dec 2020',
//     first_p: 'Build an Intrusion detection system for Smart home IoT devices using python, machine learning, weka. The system focuses on the identification of targeted devices, attacks performed and capable of classifying data as malicious or benign.',
//     second_p: 'Achieved the 98% accuracy with the Decision Tree Algorithm for types of attack performed and 97% accuracy for device detection and classification of device as benign and malicious.'
//   },
//   {
//     id: 3,
//     image: LearningPortfolio,
//     title: 'A Learning Platform',
//     date: 'Nov 2019 - Mar 2019',
//     first_p: 'Implemented an educational assessment platform using C#, .Net, MySQL by incorporating efficient method of assessment such as Rubrics.',
//     second_p: 'https://github.com/AjanSharma/Online-Exam-Assessment.git'
//   },
//   {
//     id: 4,
//     image: OpenstackPortfolio,
//     title: 'Virtual Network Functions (VNF) automation in Openstack',
//     date: 'May 2018 - Jul 2018',
//     first_p: 'Automated virtual network functions using JUJU VNF Manager, Python, Yaml scripts.',
//     second_p: 'Tested against 4 distinct use cases such as terminating, scaling up and down instances.'
//   },
//   {
//     id: 5,
//     image: AndroidPortfolio,
//     title: 'No Fickrr – Android Application',
//     date: 'May 2017 - Jul 2017',
//     first_p: 'Developed an android application for security of women with distinct features such as tracking on request, automatic calling to saved contacts, sending live location in set intervals.',
//     second_p: 'This app is resolving the problem of women security in Inda.'
//   },
//   {
//     id: 6,
//     image: SSHPortfolio,
//     title: 'SSH implementation for device Configuration',
//     date: 'Jun 2020 - Aug 2020',
//     first_p: 'Developed script in python to help network engineers to perform device configuration of multiple devices via ssh.',
//     second_p: 'Build via utilising python library to leverage the functionality of SSH.'
//   }
// ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} className='img_dim'/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target={demo === '1' ? '_blank' : ''}>{demo === '1' ? 'Github' : 'Contact Developer'}</a>
                </div>
              </article>
            )
          })
        }

            

      

        {/* <article className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <div className='front-card-data'>
                <h3>Supervised Intrusion Detection System for Smart Home IoT devices</h3>
                <img src={IDS} className='front-card-image'/>
                <h5>Sep 2022 - Oct 2022</h5>
              </div>
            </div>
            <div className="flip-card-back">
              <h3>Details</h3>
              <ul >
                <li className='portfolio_data'>
                  <BiCheck className='exp_icon'/>
                  <p>Build an Intrusion detection system for Smart home IoT devices using python, machine learning, weka. The system focuses on the identification of targeted devices, attacks performed and capable of classifying data as malicious or benign.</p>
                </li>
                <li className='portfolio_data'>
                  <BiCheck className='exp_icon'/>
                  <p>Achieved the 98% accuracy with the Decision Tree Algorithm for types of attack performed and 97% accuracy for device detection and classification of device as benign and malicious.</p>
                </li>
              </ul>
            </div>
          </div>
        </article> */}
        {/*  */}
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=''/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio