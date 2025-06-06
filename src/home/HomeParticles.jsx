import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { slickDot } from "../page-demo/script";

import ScrollToTop from "react-scroll-up";

import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";

import logoLight from "../assets/images/logo/logo-light.png";
import logoAllDark from "../assets/images/logo/logo-all-dark.png";
import about from "../assets/images/about/about-3.jpg";

import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import ScrollSpy from "../component/common/ScrollSpy";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const SlideList = [
  {
    textPosition: "text-center",
    category: "",
    title: "Creative One Page",
    description:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

const list = [
  {
    image: "image-1",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Getting tickets to the big show",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Getting tickets to the big show",
  },
];

class HomeParticles extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);
    this.state = {
      init: false,
    };

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper")?.classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");

    // var elementsMobileMenu = document.querySelectorAll('.mainmenunav ul.mainmenu li');
    // for(var i in elementsMobileMenu) {
    //     if(elementsMobileMenu.hasOwnProperty(i)) {
    //         elementsMobileMenu[i].onclick = function() {
    //             document.querySelector('.header-wrapper')?.classList.remove('menu-open');
    //         }
    //     }
    // }
  }

  async componentDidMount() {
    try {
      await initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        await loadSlim(engine);
      });
      this.setState({ init: true });
    } catch (error) {
      console.error("Error initializing particles engine:", error);
    }
  }

  particlesLoaded(container) {
    console.log(container);
    console.log("first");
  }

  stickyHeader() {}
  render() {
    const PostList = BlogContent.slice(0, 5);

    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector(".header--fixed")?.classList.add("sticky");
      } else {
        document.querySelector(".header--fixed")?.classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            ?.classList.toggle("active");
          this?.classList.toggle("open");
        };
      }
    }

    return (
      <Fragment>
        <Helmet pageTitle="Home Particles" />

        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed default-color">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img className="logo-1" src={logoLight} alt="Logo Images" />
                  <img className="logo-2" src={logoAllDark} alt="Logo Images" />
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <ul className="mainmenu">
                  <ScrollSpy
                    sectionIds={[
                      "#home",
                      "#service",
                      "#about",
                      "#portfolio",
                      "#team",
                      "#testimonial",
                      "#blog",
                      "#contact",
                    ]}
                  />
                </ul>
              </nav>
              <div className="header-btn">
                <a
                  className="rn-btn"
                  href="https://themeforest.net/checkout/from_item/25457315?license=regular"
                >
                  <span>buy now</span>
                </a>
              </div>
              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area  */}

        {/* Start Slider Area   */}

        <div
          className="slider-activation slider-creative-agency with-particles"
          id="home"
        >
          <div className="frame-layout__particles">
            {this.state.init && (
              <Particles
                className="particle"
                particlesLoaded={this.particlesLoaded}
                options={{
                  style: {
                    position: "absolute",
                  },
                  fpsLimit: 100,
                  interactivity: {
                    detectsOn: "canvas",
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 10,
                        color: "#888",
                      },
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 100,
                        duration: 0.4,
                        color: "#888",
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#888",
                    },
                    links: {
                      color: "#888",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outMode: "bounce",
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        value_area: 2000,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.5,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      random: true,
                      value: 5,
                    },
                  },
                  detectRetina: true,
                }}
              />
            )}
          </div>
          <div className="bg_image bg_image--27">
            {SlideList.map((value, index) => (
              <div
                className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title theme-gradient">
                            {value.title}
                          </h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <div
          className="service-area creative-service-wrapper ptb--120 bg_color--1"
          id="service"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="section-title text-left mb--30">
                  <h2>Our Services</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start About Area */}
        <div className="about-area ptb--120 bg_color--5" id="about">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img className="w-100" src={about} alt="About Images" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">About Us</h2>
                      <p className="description">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered{" "}
                        <a href="#alteration">alteration</a> in some form, by
                        injected humour, or randomised words which dont look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum,
                      </p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Who we are</h3>
                          <p>
                            There are many vtions of passages of Lorem Ipsum
                            available, but the majority have suffered.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Who we are</h3>
                          <p>
                            There are many vtions of passages of Lorem Ipsum
                            available, but the majority have suffered.
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
        {/* End About Area */}

        {/* Start Portfolio Area */}
        <div
          className="portfolio-area pt--120 pb--140 bg_color--1"
          id="portfolio"
        >
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">Our Portfolio</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <Slider {...slickDot}>
                      {list.map((value, index) => (
                        <div className="portfolio" key={index}>
                          <div className="thumbnail-inner">
                            <div className={`thumbnail ${value.image}`}></div>
                            <div
                              className={`bg-blr-image ${value.image}`}
                            ></div>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.category}</p>
                              <h4>
                                <a href="/portfolio-details">{value.title}</a>
                              </h4>
                              <div className="portfolio-button">
                                <a className="rn-btn" href="/portfolio-details">
                                  Case Study
                                </a>
                              </div>
                            </div>
                          </div>
                          <Link
                            className="link-overlay"
                            to="/portfolio-details"
                          ></Link>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
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

        {/* Start Team Area  */}
        <div className="rn-team-area ptb--120 bg_color--1" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                  <h2 className="title">Skilled Team</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div
          className="rn-testimonial-area bg_color--5 ptb--120"
          id="testimonial"
        >
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        <div className="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="section-title text-left">
                  <h2>Latest News</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0">
              <div className="col-lg-12">
                <Slider {...slickDot}>
                  {PostList.map((value, i) => (
                    <div className="blog blog-style--1" key={i}>
                      <div className="thumbnail">
                        <a href="/blog-details">
                          <img src={value.images} alt="Blog Images" />
                        </a>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <a href="/blog-details">{value.title}</a>
                        </h4>
                        <div className="blog-btn">
                          <a className="rn-btn text-white" href="/blog-details">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* Start Contact Us */}
        <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
          <Contact />
        </div>
        {/* End Contact Us */}

        {/* Start Brand Area */}
        <div className="rn-brand-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}
export default HomeParticles;
