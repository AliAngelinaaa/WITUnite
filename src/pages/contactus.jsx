import React from 'react'
import ContactForm from '../components/contactform'
import wit from "../images/wit.png"
import '../css/contactus.css'

function ContactUs() {
  return (
    <div style={{display:"flex", }}>
        <ContactForm></ContactForm>
        <img className='contactimg' src={wit} height='580px'></img>
    </div>
  )
}

export default ContactUs