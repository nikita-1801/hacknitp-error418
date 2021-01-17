import React from 'react'; 
import './contact.css';
function Contact (){ 
 return (
   <div>
    <>
<div className="contact-container">
  <div className="left-col">
   
  </div>
  <div className="right-col">
    <h1 className="head">Get in Touch</h1>
    <p className="para"> Have any queries, complaints or suggestions? Please leave a message down below and our team will get back to you at the earliest!</p>
    <form className="formClass" action="mailto:me@email.com" method="post" encType="text/plain">
      <label className="labelform "htmlFor="name">Full name</label>
      <input className="input" type="text" id="name" name="name" placeholder="Your Full Name" required />
      <label  className="labelform " htmlFor="email">Email Address</label>
      <input className="input" type="email" id="email" name="email" placeholder="Your Email Address" required />
      <label className="labelform " htmlFor="message">Message</label>
      <textarea className="input"  rows={6} placeholder="Your Message" id="message" name="message" required defaultValue={""} />
      <button className="buttonc" type="submit" name="submit">Send</button>
    </form>
  </div>
</div>

</>
   </div>
  

 );
} 
  
export default Contact; 