import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends Component {
  render() {
    const { title, parent } = this.props;
    return (
      <React.Fragment>
        <div
          className="breadcrumb-area rn-bg-color pt--120"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--110">
                  <h2 className="title">{title}</h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Breadcrumb;
