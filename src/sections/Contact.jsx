import React, { useState } from 'react';
import './Contact.css';
import group2372 from '../assets/Group 2372.svg';
import keyboardIcon from '../assets/keyboard.svg';
import mailIcon from '../assets/mail.svg';
import vectorDoodle from '../assets/vector-186.svg'; 

const Contact = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log("تم استقبال البيانات محلياً:", formData);


    alert(`Done! Thank you ${formData.name}, your message has been sent.`);

 
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="divider-line"></div>

        <img src={keyboardIcon} className="doodle-keyboard" alt="" />
        <img src={mailIcon} className="doodle-mail" alt="" />
        <img src={vectorDoodle} className="vector-186" alt="" />

        <h2 className="contact-heading">
          Got a project in <br />
          <span className="highlight">mind?</span>
        </h2>
        
        <div className="group-2372-wrapper">
          <img src={group2372} alt="Illustration" className="group-img" />
        </div>

        <div className="contact-right-area">
          <form className="contact-form" onSubmit={handleSubmit}>
            
            <div className="frame-17-horizontal">
              <div className="frame-15-input">
                <label>Your name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Name" 
                  required 
                />
              </div>
              <div className="frame-15-input">
                <label>Your email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Email" 
                  required 
                />
              </div>
            </div>

            <div className="frame-17-vertical">
              <label>Your Message</label>
              <textarea 
                className="textarea-frame-14" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message" 
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message <span className="arrow-icon">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;