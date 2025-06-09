import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor , FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const ServiceList = [
    {
        icon: <FiCast />, 
        title: 'Plumbing',
        description: 'We build fast, functional websites for plumbing companies with service highlights, testimonials, and simple booking flows.'
    },
    {
        icon: <FiLayers />,
        title: 'Landscaping',
        description: 'Showcase your outdoor projects with beautiful, responsive websites tailored for gardening and landscaping services.'
    },
    {
        icon: <FiUsers />,
        title: 'Wellness',
        description: 'Our wellness websites focus on calm design, booking systems, and storytelling that builds client trust and engagement.'
    },
    {
        icon: <FiMonitor />,
        title: 'eCommerce',
        description: 'We develop scalable online stores with streamlined product navigation, secure checkout, and conversion-focused UX.'
    },
    {
        icon: <FiCast />,
        title: 'Contractors',
        description: 'Designed to showcase portfolios, generate leads, and reflect the professionalism of your contracting business.'
    },
    {
        icon: <FiMonitor />,
        title: 'Restaurants',
        description: 'From menus and reservations to delivery integrations, we build restaurant websites that whet appetites and drive traffic.'
    },
    {
        icon: <FiUsers />,
        title: 'Real Estate',
        description: 'Custom property listings, MLS integrations, and lead capture tools that empower agents to close deals faster.'
    },
    {
        icon: <FiLayers />,
        title: 'Nonprofit',
        description: 'Mission-driven websites with donation tools, volunteer signups, and compelling visuals that tell your story.'
    },
    {
        icon: <FiCast />,
        title: 'Education',
        description: 'Websites for schools, tutors, and e-learning platforms that support scheduling, content delivery, and student engagement.'
    },
    {
        icon: <FiLayers />,
        title: 'Events',
        description: 'Event websites with speaker bios, registration forms, schedules, and integrations for ticketing and live streaming.'
    },
    {
        icon: <FiUsers />,
        title: 'Personal',
        description: 'Whether you’re a creator, coach, or influencer, we design personal brand sites that elevate your identity and grow your audience.'
    },
    {
        icon: <FiMonitor />,
        title: 'Custom',
        description: 'Have a unique vision? We build fully customized websites from the ground up to match your brand, goals, and user needs.'
    }
];


class Service extends Component {
    render() {
        return (
            <div className="active-dark">
                <React.Fragment>
                    <PageHelmet pageTitle='Service' />
                    <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                    {/* Start Breadcrump Area */}
                    <Breadcrumb title={'Service'} />
                    {/* End Breadcrump Area */}

                    {/* Start Service Area */}
                    <div className="service-area ptb--120 bg_color--1">
                        <div className="container">
                            <div className="row">
                                 <div className="col-lg-4 col-md-12">
                                    <div className="section-title mb--30">
									<h2 className="title">Nitches</h2>
									<p>With each project, we focus on combining strategy, design, and technology to deliver sites that not only look great but also perform seamlessly across devices and evolve with your business.
																			</p>
																			
                                       
										<p>
										  We build tailored websites that meet the unique needs of different industries — from plumbing and wellness to eCommerce and nonprofits. Whether you run a local service business, a growing online store, or a mission-driven organization, we craft digital platforms that reflect your brand, engage your audience, and drive meaningful results.
										</p>
										<p>
										 Whether you’re breathing new life into an outdated site, giving your brand a much-needed glow-up, or launching a bold new idea into the digital universe, we’re here to make the process smooth, collaborative, and maybe even fun (crazy, right?). We bring clarity, energy, and just the right amount of caffeine to every project.
										</p>
				
                                    </div>
                                </div>
                             <div className="col-lg-8 col-md-12">
							 
                            <div className="row service-one-wrapper">
                                {ServiceList.map((val, i) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                        <a href="/contact">
                                            <div className="service service__style--2">
                                                <div className="icon">
                                                    {val.icon}
                                                </div>
                                                <div className="content">
                                                    <h3 className="title">{val.title}</h3>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
							</div>
                        </div>
                    </div>
					</div>
                    {/* End Service Area */}

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

export default Service;