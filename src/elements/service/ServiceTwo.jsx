import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: 'Website Development',
    description:
      'We build fast, scalable, and user-friendly websites using modern frameworks — crafted to meet your business goals and delight your users.',
  },
  {
    icon: <FiMonitor />,
    title: 'UI Prototyping',
    description:
      'We bring your ideas to life early with interactive wireframes and prototypes — streamlining collaboration and validating user flows before development begins.',
  },
  {
    icon: <FiMonitor />,
    title: 'Graphic Design',
    description:
      'Our UI designs are pixel-perfect and aligned with your brand identity — creating a consistent and engaging look across all platforms.',
  },
  {
    icon: <FiMonitor />,
    title: 'Hosting & Deployment',
    description:
      'We manage secure, scalable hosting and seamless deployments — ensuring your site stays fast, live, and ready for growth.',
  },
  {
    icon: <FiMonitor />,
    title: 'Maintenance & Support',
    description:
      'We provide reliable, ongoing support — from bug fixes and updates to performance monitoring and new feature rollouts.',
  },
  {
    icon: <FiMonitor />,
    title: 'Accessibility',
    description:
      'Our designs follow WCAG and ADA standards to ensure that your website is inclusive, legally compliant, and accessible to all users.',
  },
];

class ServiceTwo extends Component{
    render(){
        let title = 'Services',
        description = 'We design and build fast, scalable websites with intuitive wireframes, on-brand visuals, accessible interfaces, reliable hosting, and long-term support — delivering a seamless digital experience from concept to launch and beyond.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/contact"><span className="text">Request Custom Service</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
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
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
