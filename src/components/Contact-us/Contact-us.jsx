import React from 'react'
import './Contact-us.css'

function ContactUS() {
  return (
    <div className="contact-wrapper1">
      <div className="container-box">
        <h1>Contact Form</h1>
        <form action="">
          <div className="input-row">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="E-mail" />
          </div>
          <div className="input-row">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Write Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUS
