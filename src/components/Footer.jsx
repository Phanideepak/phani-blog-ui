import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" width = "80" height="50"/>
      <span>Made with ❤, <b>React</b> and <b>Spring</b></span>
    </footer>
  )
}

export default Footer
