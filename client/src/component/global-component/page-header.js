import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page_header extends Component {
  render() {
    let HeaderTitle = this.props.headertitle;
    let publicUrl = process.env.PUBLIC_URL + "/";
    let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle;

    return (
      <>
        <div className="  breadcrumb-area">
          <div>
            <div className="row">
              <div className="breadcrumb-inner">
                <h1
                  className="page-title"
                  style={{
                    fontWeight: "700",
                    color: "white",
                    paddingLeft: "20px",
                  }}
                >
                  {HeaderTitle}
                </h1>
                <ul className="page-list">
                  <li>
                    <Link
                      to="/"
                      style={{ fontWeight: "700", paddingLeft: "20px" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li style={{ fontWeight: "700", color: "white" }}>
                    {Subheader}
                  </li>
                </ul>
              </div>
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Page_header;
