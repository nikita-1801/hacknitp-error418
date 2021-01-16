import React from 'react'; 
import './contact.css';
function Contact (){ 
 return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <h2>Get in Touch</h2>
        <br />
        <p>Want to get in touch? We'd love to hear from you. Fill out the form and we'll contact you soon.</p>
        <br />
        <p>Urgent? Ring us up- 8888888888</p>
        <p>Or directly email us on me@email.com</p>
        <br />
        <p>Know more about us!</p>
        <a href="www.facebook.com"><i className="fab fa-facebook" /></a>
        <a href="www.instagram.com"><i className="fab fa-instagram" /></a>
        <a href="www.twitter.com"><i className="fab fa-twitter" /></a>
        <a href="www.linkedin.com"><i className="fab fa-linkedin" /></a>
      </div>
      <div className="col-md-6">
        <form action="mailto:me@email.com" method="post" encType="text/plain">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name" />
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name" />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="emailaddress" required placeholder="Your email address" />
          <label htmlFor="subject">Message</label>
          <textarea id="subject" name="subject" required placeholder="What can we do for you?" style={{height: 200}} defaultValue={""} />
          <input type="submit" defaultValue="Send" />
        </form>
      </div>
    </div>
  </div>

 );
} 
  
export default Contact; 