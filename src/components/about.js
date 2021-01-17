import React from 'react'; 
import './about.css';
function About () { 
    return (
      <div> 
      <div>
        
        <div className="about-section">
          <div className="inner-container">
            <h1> About Us</h1>
            <p className="text">
              At INDYA AZOLLA we focus on influencing people to make concious life choices that promote sustainable development through sustainable living. Sustainable development is the organizing principle for meeting human development goals while simultaneously sustaining the ability of natural systems to provide the natural resources and ecosystem services on which the economy and society depend.
            </p>
            <div className="skills">
              <span>Web Design</span>
              <span>Photoshop &amp; Illustrator</span>
              <span>Coding</span>
            </div>
          </div>
        </div>
      </div>
      <section className="text-center about">
  <br />
  <br />
  <h1>Our Impact</h1>
  <div className=" team">
    <div className="row">
      <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
        <span className="fa fa-group" />
        <h2>Social</h2>
        <p className="lead">
        Because we are creating a conductive environment, it's encouraging more people to make the switch. Sustainable lifestyle will allow a better distribution of resources among the population
          </p>
      </div>
      <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
        <span className="fa fa-info" />
        <h2>Economical</h2>
        <p className="lead">
          By implementing scheme of zero waste, the costs of water, energy and infrastructure developement is reduced drastically. Also, the resources are saved for future which will promote economic growth.
           </p>
      </div>
      <div className="clearfix visible-md-block visible-sm-block" />
      <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset={200}>
        <span className="fa fa-file" />
        <h2>Environmental</h2>
        <p className="lead">
          By shifting to sustainable living practices, reducing the burden on natural resources which helps in decreasing the carbon footprint saving our trees and preventing climate change reducing the production of plastic by recycling it.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Our team Section */}
      <section id="team" className="team content-section">
        <div className=" ">
          <div className="row text-center">
            <div className="col-md-12">
              <h1 >Our Team</h1>
              <h3 className="caption gray">Meet the people behind Indya Azolla</h3>
            </div>{/* /.col-md-12 */}
            <div className="">
              <div className="row">
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img src="https://media-exp1.licdn.com/dms/image/C5103AQGlJZIWP1y9Ww/profile-displayphoto-shrink_200_200/0/1582482031865?e=1616025600&v=beta&t=TvOJX83SLXPkhqruxtLuXNUdhXq_EVlFzEtQj6PU5ME" alt className="img-responsive" />
                      <figcaption>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores mollitia.</p> */}
                        <ul>
                          {/* <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li> */}
                          <li><a href><i className="fa fa-linkedin fa-2x" /></a></li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Devanshi Katyal</h4>
                    <p>ECE Sophomore, IGDTUW</p>
                  </div>{/* /.team-member*/}
                </div>{/* /.col-md-4 */}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQETaOmx21Dx0Q/profile-displayphoto-shrink_800_800/0/1610632319799?e=1616025600&v=beta&t=bIQnjOhthBBN7KNKyZzPRh3s7iRbOp2YxVeSPZhcQrc" alt className="img-responsive" />
                      <figcaption>
                        <p />
                        <ul>
                          {/* <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li> */}
                          <li><a href><i className="fa fa-linkedin fa-2x" /></a></li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Khushi Gandhi</h4>
                    <p>ECE Sophomore, IGDTUW</p>
                  </div>{/* /.team-member*/}
                </div>{/* /.col-md-4 */}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQE-ye1oZaQwTw/profile-displayphoto-shrink_800_800/0/1596931697077?e=1616025600&v=beta&t=i9-XTWT4-cD_C3qxzByGF6APNEHGp5x--ONzk0HV9fg" alt className="img-responsive" />
                      <figcaption>
                        <p />
                        <ul>
                          {/* <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li> */}
                          <li><a href><i className="fa fa-linkedin fa-2x" /></a></li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Nikita Aggarwal</h4>
                    <p>ECE Sophomore, IGDTUW</p>
                  </div>{/* /.team-member*/}
                </div>{/* /.col-md-4 */}
                <div className="col-md-3">
                  <div className="team-member">
                    <figure>
                      <img src=" https://media-exp1.licdn.com/dms/image/C5603AQFVGrGJaQlgAA/profile-displayphoto-shrink_800_800/0/1591562627438?e=1616025600&v=beta&t=vG0S90dM75IZ7elA4DIxidaxgwUKr7Pfi8dv1bMAAIE" alt className="img-responsive" />
                      <figcaption>
                        <p />
                        <ul>
                          {/* <li><a href=""><i class="fa fa-facebook fa-2x"></i></a></li>
                      <li><a href=""><i class="fa fa-twitter fa-2x"></i></a></li> */}
                          <li><a href><i className="fa fa-linkedin fa-2x" /></a></li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Sunidhi Chaudhary</h4>
                    <p>ECE Sophomore, IGDTUW</p>
                  </div>{/* /.team-member*/}
                </div>{/* /.col-md-4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.row */}
        </div>{/* /.container */}
      </section>{/* /.our-team */}
      <div className="img-container">
        <img src="https://www.jet-contracting.com/images/sustainability.gif" alt="SUSTAINABLE LIVING" className="img-responsive" />
      </div>
   
    </div>
    );
} 
export default About;