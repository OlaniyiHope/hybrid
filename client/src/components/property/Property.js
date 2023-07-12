import React, { Component } from "react";
import { Link } from "react-router-dom";
import Page_header from "../../component/global-component/page-header";
import Footer from "../../component/global-component/footer";
import Navbar from "../../component/global-component/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Featureds from "../../component/section-component/featured-properties";
const Property = () => {
  return (
    <>
      <div className="property-area pd-top-100">
        <Navbar />
        <Page_header headertitle="Property" />
        <br />
        <Featureds />
        <Footer />
      </div>
    </>
  );
};

export default Property;
