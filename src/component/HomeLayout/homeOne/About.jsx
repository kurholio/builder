import React, { Component } from "react";

import aboutImg from "../../../assets/images/about/about-1.jpg";

class About extends Component {
  render() {
    let title = "About",
      description1 ="We are a family boutique, where personal approach is at the heart of everything we do. Our small team combines years of expertise in software development, graphic design, and marketing. That means when you work with us, you're not passed through layers of departments — you're working directly with seasoned professionals who care. From early-stage UX research and wireframes to stunning UI design, development, and go-to-market strategy, we partner with you every step of the way.",
	  
	  description2 ="Whether you are updating your site, refreshing your brand, or building something bold from scratch, we help you move forward with clarity, energy, and purpose. LunaraTech is built for those who want more than just a service — they want a relationship, a team that listens, and results that last. Let's make something meaningful together.";
	  
    return (
	  <div className="active-dark">
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img className="w-100" src={aboutImg} alt="About Images" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description1}</p>
					<p className="description">{description2}</p>
                  </div>
				  <div className="row mt--30 mt_sm--10">
				    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
				      <div className="about-us-list">
				        <h3 className="title">What we do</h3>
				        <p>
				          We craft modern websites and mobile apps that are intuitive, scalable, and deeply aligned with your brand’s goals and audience.
				        </p>
				      </div>
				    </div>
				    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
				      <div className="about-us-list">
				        <h3 className="title">How we do it</h3>
				        <p>
				          Through intentional design, clean development, and strategic thinking, we turn bold ideas into digital experiences that connect and perform.
				        </p>
				      </div>
				    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
	  </div>
    );
  }
}
export default About;
