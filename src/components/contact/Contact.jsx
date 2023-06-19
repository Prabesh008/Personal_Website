import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>prabeshkhati40@gmail.com</h5>
          <a href='mailto:prabeshkhati40@gmail.com' target='blank'>Send a message</a>
          </article>

          <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>Prabesh Khati Chhetri</h5>
          <a href='https://m.me/prabesh08' target='blank'>Send a message</a>
          </article>

          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <a href='https://api.whatsapp.com/send?phone=9779866499611' target='blank'>Send a message</a>
          </article>
        </div>
      
      {/* END OF CONTACT OPTIONS */}

    <form action=''>
      <input type='text' name='name' placeholder='Your Full Name' required></input>
      <input type='email' name='email' placeholder='Your Email' required></input>
      <textarea  name='message' rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact