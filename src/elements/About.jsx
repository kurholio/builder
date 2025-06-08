import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import about from "../assets/images/about/about-3.jpg";
import findingImg from "../assets/images/about/finding-us-01.png";


class About extends Component {
  render() {
    let description1 = "We’re a family-run boutique studio — think less corporate boardroom, more creative kitchen table (with better snacks). Our small but mighty team brings together years of expertise in software development, graphic design, and marketing. When you work with us, you’re not dealing with “account managers” or getting lost in a support queue — you’re talking to the folks who actually do the work (and love it).",
	description2 = "We believe in a hands-on, human approach. From early-stage UX research and wireframes to jaw-dropping UI design and flawless development, we’re with you at every step. Need a go-to-market strategy? We’ve got that covered too — ideally without a single boring PowerPoint involved.",
		description3 = "Whether you’re breathing new life into an outdated site, giving your brand a much-needed glow-up, or launching a bold new idea into the digital universe, we’re here to make the process smooth, collaborative, and maybe even fun (crazy, right?). We bring clarity, energy, and just the right amount of caffeine to every project.",
		description4 = "LunaraTech isn’t just about services — it’s about partnership. We’re the team that listens, rolls up our sleeves, and actually gives a damn. If you’re looking for something meaningful, built with care and a bit of good humor, let’s make it happen together.";
		
    return (
		<div className="active-dark">
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"About"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={about}
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">

                      <p className="description">{description1}</p>
					  <p className="description">{description2}</p>
					 
					  
                    </div>
                    <div className="row mt--30 mt_sm--10">
					  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
					    <div className="about-us-list">
					      <h3 className="title">Step By Step</h3>
					      <p>
					        We help brands show up online with confidence — building websites and apps that not only look amazing but actually do their job: inform, convert, and grow.
					      </p>
					    </div>
					  </div>
					  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
					    <div className="about-us-list">
					      <h3 className="title">Minus the Jargon</h3>
					      <p>
					        We listen closely, design with purpose, and build with precision — translating your vision into a seamless digital product people actually want to use.
					      </p>
					    </div>
					  </div>
					</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
			  <h4 className="theme-gradient">Built on Collaboration</h4>
			  <p>
			    Great work doesn’t happen in silos. At LunaraTech, designers, developers, and strategists work side by side (literally) to bring your ideas to life. We listen, challenge, and support each other — and you — every step of the way.
			  </p>
                <a className="rn-btn btn-white" href="/contact">
                  Get Started
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img src={findingImg} alt="Finding Images" />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        


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
export default About;
