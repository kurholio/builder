import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import GoogleMapReact from "google-map-react";
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import contactImg from "../assets/images/about/about-6.jpg";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
	  <div className="active-dark">
      <React.Fragment>
        <PageHelmet pageTitle="Contact" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
			  <div className="rn-page-title text-center pt--100">
			    <h2 className="title theme-gradient">Your Vision, Our Code</h2>
			    <p>
			      At LunaraTech, we don’t just deliver digital products — we co-create them with you. We're the kind of team that listens carefully, thinks creatively, and builds with intention. If you're after results that feel as good as they perform, you're in good company. Let’s turn your idea into something unforgettable.
			    </p>
			  </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact With Phone Number</h4>
                    <p>
                      <a href="tel:+057 254 365 456">+057 254 365 456</a>
                    </p>
                    <p>
                      <a href="tel:+856 325 652 984">+856 325 652 984</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Email Address</h4>
                    <p>
                      <a href="mailto:admin@lunaratech.com">admin@lunaratech.com</a>
                    </p>
                    <p>
                      <a href="mailto:sales@lunaratech.com">sales@lunaratech.com</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p>
                      2720 Joppa Ave S, <br /> Minneapolis MN, 55416
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Page Area  */}
        <div className="rn-contact-page ptb--120 bg_color--1">
			<div className="contact-form--1">
		        <div className="container">
		          <div className="row row--35 align-items-start">
		            <div className="col-lg-6 order-2 order-lg-1">
		              <div className="section-title text-left mb--50">
		                <h2 className="title">Contact Us</h2>
		                <p className="description">
		                 Whether you’re breathing new life into an outdated site, giving your brand a much-needed glow-up, or launching a bold new idea into the digital universe, we’re here to make the process smooth, collaborative, and maybe even fun (crazy, right?). We bring clarity, energy, and just the right amount of caffeine to every project.
		                </p>
		              </div>
		              
		            </div>
		            <div className="col-lg-6 order-1 order-lg-2">
		              <div className="thumbnail mb_md--30 mb_sm--30">
		                <img src={contactImg} alt="trydo" />
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
        </div>
        {/* End Contact Page Area  */}

     

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
	  </div>
    );
  }
}
export default Contact;
