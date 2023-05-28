import React from 'react'
import Nav from './nav/Nav'
import './style.css'
import PaymentsIcons from './payment-icons/PaymentsIcons'
import ContactUs from './contact-us/ContactUs'

const Footer = () => {
  return (
    <footer>
      <ContactUs/>
    <div className='nav-payment-container'>
    <Nav/>
      <PaymentsIcons/>
    </div>
    </footer>
  )
}

export default Footer