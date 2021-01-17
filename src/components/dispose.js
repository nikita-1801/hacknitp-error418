import React from 'react'; 
import './dispose.css';
export default function Dispose (){ 
 return (
     <div className="contact-container">
         
  <div className=" left-col1">
    <h1 className="above " style={{paddingTop: '40%'}}>
      <mark> Dispose off the used items lying in your house in an environmentally friendly manner.</mark>
    </h1>
   
    <h2 className="above "> <mark>We do everything to ensure that the collected waste is recycled to its maximum capacity</mark></h2>
  </div>
  
  <div className=" right-col">
  <form  action="/">
      <h1 className="head">Customer Detail Form</h1>
      <h2>Personal Details</h2>
      <div className="item">
        <p className="para">Name</p>
        <div className="name-item">
          <input type="text" name="name" placeholder="First" />
          <input type="text" name="name" placeholder="Last" />
        </div>
      </div>
      <div className="item">
        <p className="para">Phone</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p className="para">Fax</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p className="para">Email</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p className="para">Product name</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p className="para">Address</p>
        <input type="text" name="name" placeholder="Street address" />
        <input type="text" name="name" placeholder="Street address line 2" />
        <div className="city-item">
          <input type="text" name="name" placeholder="City" />
          <input type="text" name="name" placeholder="Region" />
          <input type="text" name="name" placeholder="Postal / Zip code" />
          <select>
            <option value>Country</option>
            <option value={1}>Russia</option>
            <option value={2}>Germany</option>
            <option value={3}>France</option>
            <option value={4}>India</option>
            <option value={5}>USA</option>
          </select>
        </div>
      </div>
      <h2 className="head">Product Details</h2>
      <div className="item">
        <p className="para">Product Name</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p className="para"> Product Brand</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p className="para">Date of Buy</p>
        <input className="datec" type="date" name="bdate" />
        <i className="fas fa-calendar-alt" />
      </div>
      <div className="item">
        <label className="labelform" htmlFor> Biodegradable?</label><br />
        <input type="text" name id />   
      </div>
      <div className="item">
        <p className="para">  How Old is the product?</p>
        <select classsName="select">
          <option className="optionc" value>Years</option>
          <option value={1}>&lt;=5years</option>
          <option value={2}>&gt;5years but &lt;=10years</option>
          <option value={3}>&gt;10years</option>
          <option value={4}>&gt;20years</option>
          <option value={5}>&gt;30years</option>
        </select>
      </div>
      <div className="question">
        <p className="para">Privacy Policy<span className="para required">*</span></p>
        <div className="question-answer checkbox-item">
          <div>
            <input type="checkbox" defaultValue="none" id="check_1" name="check" required />
            <label htmlFor="check_1" className="check"><span>I agree to the privacy policy.</span></label>
          </div>
        </div>
      </div>
      <div className="btn-block">
        <button className="buttonc" type="submit" href="home">Send</button>
      </div>
    </form>
</div>
</div>
 );}