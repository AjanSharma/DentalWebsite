import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow1',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur esse possimus quod nemo eveniet, beatae quas doloremque delectus hic quaerat voluptatem! Voluptatum commodi modi inventore tenetur! Iste cumque praesentium sunt.'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow2',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur esse possimus quod nemo eveniet, beatae quas doloremque delectus hic quaerat voluptatem! Voluptatum commodi modi inventore tenetur! Iste cumque praesentium sunt.'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow3',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur esse possimus quod nemo eveniet, beatae quas doloremque delectus hic quaerat voluptatem! Voluptatum commodi modi inventore tenetur! Iste cumque praesentium sunt.'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow4',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur esse possimus quod nemo eveniet, beatae quas doloremque delectus hic quaerat voluptatem! Voluptatum commodi modi inventore tenetur! Iste cumque praesentium sunt.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

        {/* <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nobis earum incidunt autem dignissimos dolor neque sequi ratione quod! Id molestias fugiat, dolore temporibus at repudiandae voluptas minus aut! Corporis?</small>
        </article> */}

        {/* <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nobis earum incidunt autem dignissimos dolor neque sequi ratione quod! Id molestias fugiat, dolore temporibus at repudiandae voluptas minus aut! Corporis?</small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nobis earum incidunt autem dignissimos dolor neque sequi ratione quod! Id molestias fugiat, dolore temporibus at repudiandae voluptas minus aut! Corporis?</small>
        </article>

        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad nobis earum incidunt autem dignissimos dolor neque sequi ratione quod! Id molestias fugiat, dolore temporibus at repudiandae voluptas minus aut! Corporis?</small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials