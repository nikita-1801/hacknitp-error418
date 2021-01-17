import React from 'react'; 
import './contact.css';
function Contact (){ 
 return (
    <div className="contact-container">
      <div className="left-col">
//         <br />
      </div>
      <div className="right-col">
        <h1>Get in Touch</h1>
        <p>Have any queries, complaints or suggestions? Please leave a message down below and our team will get back to you at the earliest!</p>
        <form action="mailto:me@email.com" method="post" encType="text/plain">
          <label for="name">Full name</label>
          <input type="text" id="name" name="name" placeholder="Your Full Name" required>
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your Email Address" required>
          <label for="message">Message</label>
          <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
          <button type="submit" name="submit">Send</button>
        </form>
      </div>
  </div>

 );
} 
  
export default Contact; 
