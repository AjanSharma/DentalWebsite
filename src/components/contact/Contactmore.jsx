import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbc8zeo', 'template_zsqvtoe', form.current, 'md0KdCi6fiAe5SDCb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Book Your Appointment</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>clinicemail@example.com</h5>
            <a href="mailto:ajansharma7@gmail.com" target="_blank">Send an Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>OurClinic</h5>
            <a href="https://m.me/clinic" target="_blank">Message Us</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+123456789" target="_blank">Chat with Us</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Your Phone Number" required />
          <select name="appointmentType" required>
            <option value="" disabled selected>Type of Appointment</option>
            <option value="Consultation">Consultation</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Root Canal">Root Canal</option>
            <option value="Braces Consultation">Braces Consultation</option>
          </select>
          <input type="date" name="appointmentDate" required />
          <textarea name="message" rows="7" placeholder="Additional Message (Optional)"></textarea>
          <div className="form__buttons">
            <button type="submit" className="btn btn-primary">Book Appointment</button>
            {/* <button type="reset" className="btn">Reset</button> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
