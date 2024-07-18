import React from 'react'
import ContactForm from '../components/contactform'
import wit from "../images/wit.png"

function ContactUs() {
  return (
    <div style={{display:"flex", }}>
        <ContactForm></ContactForm>
        <img src={wit} height='580px'></img>
    </div>
  )
}

export default ContactUs