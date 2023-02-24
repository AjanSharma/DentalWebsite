import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import Citi from '../../assests/Citi4.png'
import MS from '../../assests/MorganStanley.jpg'
// import TM from '../../assests/techMahindra.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">

        <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='okay'
        >
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Citi, Canada</h3>
            </div>

            <img src={Citi} className='img_logo'/>


            {/* <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul> */}
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Citi, Canada</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Designing, building, and maintaining the secure, scalable, and high-performance applications.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing and deploying automated solutions for business </p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing and integrating database systems to ensure the efficient transfer of data between different systems.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Experience in using bug tracking tool JIRA.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Analyze, debug, and resolve application issues.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Involved in implementation of Autosys jobs </p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Participating in code reviews to ensure the code meets quality and performance standards</p>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>
        


      
        {/* <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>


          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}

        <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='okay'
        >
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Morgan Stanley, Canada</h3>
            </div>

            <img src={MS} className='img_logo'/>


            {/* <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul> */}
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Morgan Stanley, Canada</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Designing, implementing, and maintaining the DevOps processes and systems used by the organization to develop, test, deploy, and manage software applications and services.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Automating the build, deployment, and testing processes for software applications and services using Azure DevOps, including Azure Pipelines</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Writing the underlying scripts for Autosys jobs in Bash, and Python.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Provide L3 support on mission-critical Trading and Risk Application</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Experienced with Docker container service.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Implementation and maintenance of ‘Ready for Business’ checks. </p>
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Morgan Stanley, Canada</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Build pipelines in Azure DevOps to enable CI/CD for both pre-production and production environments, which significantly reduced deployment time and effort.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Experienced in Branching, Merging, and maintaining the version across the environments using SCM tools like Git.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Working on SQL queries/extracts related to the Trading desk.</p>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper>

        {/* <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
{/* ----------------------------------------------Tech Mahindra ----------------------------------------- */}
        {/* <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='okay'
        >
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Tech Mahindra, India</h3>
            </div>

            <img src={TM} className='img_logo'/>


            
          </SwiperSlide>
          <SwiperSlide className='service'>
            <div className="service__head">
              <h3>Tech Mahindra, India</h3>
            </div>


            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Automated virtual network functions in openstack – an emerging open-source cloud platform.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Improved automation with the usage of JUJU VNF Manager to reduce operation overhead.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Tested against 4 distinct use cases such as terminating, scaling up and down instances.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Debugged the implemented python and yaml script and corrected the bugs.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Designed high level diagram for the ongoing project in the organization.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Accomplished the project objective of automation within 3 months of internship.</p>
              </li>
            </ul>
          </SwiperSlide>
        </Swiper> */}

        
      </div>
    </section>
  )
}

export default Services