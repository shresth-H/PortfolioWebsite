import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Shrestha Saxena</h1>
        <h3 className="text-light">
  
          <Typewriter
            words={['Developer','Analyst']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={100}

          />  
        </h3>
        <CTA />
        <Socials/>

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header