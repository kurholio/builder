import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg1 from "../assets/images/client/testimonial-1.jpg";
import testimonialImg2 from "../assets/images/client/testimonial-2.jpg";
import testimonialImg3 from "../assets/images/client/testimonial-3.jpg";
import testimonialImg4 from "../assets/images/client/testimonial-4.jpg";
import testimonialImg5 from "../assets/images/client/testimonial-5.jpg";
import testimonialImg6 from "../assets/images/client/testimonial-6.jpg";
import testimonialImg7 from "../assets/images/client/testimonial-7.jpg";
import testimonialImg8 from "../assets/images/client/testimonial-8.jpg";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
		
          <div className="col-lg-12">
            <Tabs>
			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        Our plumbing websites are built for function and trust — showcasing services, emergency contacts, and easy booking to help local pros grow.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>Plumbing Websites</span> – Built for trust, speed, and conversion.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        From photo galleries to seasonal services, our landscaping websites are designed to let your outdoor work shine with beauty and professionalism.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>Landscaping Websites</span> – Visual-first design that grows with your business.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        Health and wellness websites we create are calming, clean, and clear — with online booking, service pages, and engaging blog sections.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>Health & Wellness</span> – Digital serenity, crafted for connection.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        Our eCommerce websites focus on conversion and scalability — featuring secure checkout, product filtering, and mobile-first shopping.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>eCommerce</span> – Online stores designed to convert and scale.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        Construction and contractor websites that highlight portfolios, past work, and make it easy for clients to request quotes or consultations.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>Construction</span> – Bold, service-driven, and built to impress.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        Restaurant websites with menus, reservation tools, online ordering, and the kind of visual design that whets appetites instantly.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>Restaurants</span> – Mouthwatering experiences for modern diners.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        Our real estate websites support MLS integration, lead capture, and custom property galleries to drive interest and streamline buying.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>Real Estate</span> – Listings that move buyers and close deals.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

			<TabPanel>
			  <div className="rn-testimonial-content text-center">
			    <div className="inner">
			      <p>
			        Nonprofit websites we develop emphasize mission, trust, and action — with donation portals, event listings, and volunteer forms that convert.
			      </p>
			    </div>
			    <div className="author-info">
			      <h6>
			        <span>Nonprofits</span> – Mission-driven, story-focused digital platforms.
			      </h6>
			    </div>
			  </div>
			</TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg1} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg2} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg3} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg4} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg5} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg6} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg7} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg8} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
