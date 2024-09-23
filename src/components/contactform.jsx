import React ,{useState} from 'react'
import '../css/contactus.css'
import name from "../images/form_name_icon.svg"
import email from "../images/form_email_icon.svg"
import message from "../images/form_message_icon.svg"
import linkedin from "../images/linkedin_icon_pink.svg"
import discord from "../images/discord_icon_pink.svg"

function ContactForm() {
  console.log("env: ", process.env.REACT_APP_WEB_3_FORMS_PUBLIC_KEY);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    formData.append("access_key", process.env.REACT_APP_WEB_3_FORMS_PUBLIC_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      event.target.reset();
    }
  };

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <h1 className='text-5xl' style={{marginBottom:16}}>Contact Us</h1>
      <div className='input-container'>
        <img className='symbol' src={name} style={{marginRight:8}}></img>
        <input type="text" name="name"/><br/>
      </div>
      <label className='text-xs mb-6'>Your Name</label>
      <div className='input-container'>
        <img className='symbol' src={email} style={{marginRight:8}}></img>
        <input type="email" name="email"/><br/>
      </div>
      <label className='text-xs mb-6'>Your E-mail</label>
      <div className='input-container'>
        <img className='symbol' src={message} style={{marginRight:8, textAlign:'start'}}></img>
        <textarea name="message"></textarea><br/>
      </div>
      <label className='text-xs mb-14'>Message</label>
      <button className="custom-button" type="submit">Contact</button>
      <div className='flex mt-16'>
        <a href='https://www.linkedin.com/company/wit-unite/' target='_blank'><img src={linkedin} className='social'></img></a>
        <a href='https://discord.com/invite/PjwYfs48AX' target='_blank'><img src={discord} className='social'></img></a>
      </div>
    </form>
  );
}

export default ContactForm