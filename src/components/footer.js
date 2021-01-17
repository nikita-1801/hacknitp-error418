import React from "react";
import "./footer.css";
import img from "./img.png";
export default function Footer(){
    return(<div>
        <footer className="footer-distributed">
  <div className="footer-left">
    
   <img src={img} alt className="logoimg"/>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p><span />New Delhi, India</p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>+011 5555 5555</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:support@company.com">support@indyaazolla.com</a></p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span />
      At INDYA  AZOLLA we are taking small steps everyday to achieve the goals of Sustainable Development through Sustainable Living.
    </p>
    <div className="footer-icons">
      <a href="#"><i className="fa fa-facebook" /></a>
      <a href="#"><i className="fa fa-twitter" /></a>
      <a href="#"><i className="fa fa-linkedin" /></a>
      <a href="#"><i className="fa fa-github" /></a>
    </div>
  </div>
</footer>

    </div>)
}