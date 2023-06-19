import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/prabesh.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
          <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Prabesh Khati Chhetri</h1>
          <h5 className="text-light">React Developer</h5>
          <CTA/>
          <HeaderSocials/>  
          <div className="me">
            <img src={ME} alt='me' height="300px"/>
          </div>
          <a href="contact" className="scroll_down">Scroll Down</a>
          </div>
    </header>
  )
}

export default Header