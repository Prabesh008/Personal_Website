import React from 'react'
import './about.css'
import ME from '../../assets/prabesh1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

       <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt='About_Image' height="410px" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>5 months of professional working experience</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>I have not worked with a client yet</small>
            </article>

            <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>I have completed around 5-6 projects in college</small>
            </article>
          </div>
           <p>I am Prabesh Khati Chhetri a React Developer. I am proficient in frontend technologies and have a basic 
            understanding of the backend. I like solving problems and challenging myself.
            I like playing every sport i can get my hands on. Apart form that my hobbies include playing the guitar and singing. I also have interest 
            in cars.
           </p>

             <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
       </div>

    </section>
  )
}

export default About