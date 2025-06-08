import React, { Component } from "react";

import icon1 from "../../assets/images/icons/icon-03.png";

const ServiceList = [
  {
    icon: icon1,
    title: "Clean Code",
    description:
      "We write code that's readable, maintainable, and built to scale — ensuring smooth development and long-term stability.",
  },
  {
    icon: icon1,
    title: "Bold Design",
    description:
      "Our designs are crafted to stand out — modern, intuitive, and tailored to create lasting impressions.",
  },
  {
    icon: icon1,
    title: "Real Connection",
    description:
      "We prioritize genuine collaboration, turning your ideas into digital experiences that resonate with your audience.",
  },
];

class ServiceOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {ServiceList.map((val, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="service service__style--1">
                <div className="icon">
                  <img src={val.icon} alt="Digital Agency" />
                </div>
                <div className="content">
                  <h4 className="title">{val.title}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceOne;
