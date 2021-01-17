import React from "react";
import './app.css';
import banner from "./susbg6.jfif";
export default function blog(){
  return(
     <div>
      <section className="blog">
  <div className="heading2">
    <h1>Live Sustainably </h1>
    <p>Tips to adopt eco-friendly measures in our daily lives</p>
  </div>
  <section className="articles">
    <div className="row">
      <div className="col-md-6 column">
        <div className="card">
          <div className="video">
            <a href="https://www.youtube.com/watch?v=Qb-hulrdWr4">
              <span className="circle">
                <span className="triangle" />
              </span>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://www.youtube.com/watch?v=Qb-hulrdWr4">Ways to make your workplace greener</a>
            </h4>
            <p className="card-text">
              Watch video
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 column">
        <div className="card">
          <img src="https://www.onyalife.com/wp-content/uploads/photo-1564804646771-54802b358dc0-1014x487.jpg" alt />
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://www.onyalife.com/degradable-vs-biodegradable-vs-certified-compostable/">Degradable vs Biodegradable vs Compostable</a>
            </h4>
            <p className="card-text category">
              Composting
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 column">
        <div className="card">
          <img src="https://www.onyalife.com/wp-content/uploads/zero-waste-party-Header--1014x487.jpg" alt />
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://www.onyalife.com/zero-waste-party/">33 Ways to turn a house party to a zero-waste-party</a>
            </h4>
            <p className="card-text category">
              Zero-waste
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="container1">
    <img src={banner} alt="Snow" style={{width: '100%'}} />
    <div className="bottom-left" />
    <div className="top-left">Living Sustainably,
      <br />  By Buying Better</div>
    <div className="top-right">
      <p><br />One of the easiest sustainable lifestyle changes you can make is adjusting how your choices on a day-to-day basis.
      <br /><br />Whether that’s being more mindful of what you buy at the grocery store, or how you might do ‘gifting’ for family and friends during the holiday season, better buying decisions can have a ripple effect on people and our planet.
      <br /><br />It’s these small actions we take, that can help to leave the world a more just, equitable, and habitable place for all of us, not just some of us.
    </p></div>
    <div className="bottom-right" />
    <div className="centered" />
  </div>
  <section className="articles">
    <div className="row">
      <div className="col-md-3 column">
        <div className="card">
          <img src="https://granito.co.id/wp-content/uploads/2016/12/teal-green-kitchen-1014x487.png" alt />
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://www.homestolove.co.nz/inspiration/tips-and-advice/ways-to-make-your-kitchen-sustainable">5 simple ways to make your kitchen more sustainable</a>
            </h4>
            <p className="card-text">
              Being sustainable comes down to the choices we make. Take the guesswork out of eco-friendly living with these simple ideas...
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 column">
        <div className="card">
          <img src="https://www.onyalife.com/wp-content/uploads/pexels-anna-shvets-3962285_GROCERY-SHOPPING-1014x487.jpg" alt />
          <div className="card-body">
            <h4 className="card-title">
              <a href="https://www.onyalife.com/reusables-are-still-safe-to-use-during-a-pandemic/">Why Reusables Are Still Safe To Use During A Pandemic</a>
            </h4>
            <p className="card-text">
              Use of single-use plastic has surged during the pandemic amid uncertainty in the safety of reusable containers. We have seen...
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="slideshow">
          <div className="slider">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkHwrNzEaiTixODNXCJlcfpTd71BWqY51tQ&usqp=CAU" className="image5" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd4dsENURajSFZivtEn4mdEAVUm7tU_ZVrCw&usqp=CAU" className="image4" />
            <img src="https://bsmedia.business-standard.com/media-handler.php?mediaPath=http://bsmedia.business-standard.com/_media/bs/img/article/2018-03/08/full/1520511653-3953.jpg&width=1200" className="image3" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U9ViuE81Z5r-jZ3AAhbLu63BfYCjEX-04A&usqp=CAU" className="image2" />
            <img src="https://www.organicauthority.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_500/MTU5MzMwMDMzNDg4ODk3NjMy/sustainable-living.webp" className="image1" />
            <div className="null" />
          </div>
        </div>
      </div>
    </div>
    </section></section>

     </div>
  );
}