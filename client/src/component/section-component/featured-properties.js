import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
const Featureds = () => {
  const { data, loading, error } = useFetch("/properties?featured=true");
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  return (
    <div className="properties-area ">
      <div className="container">
        <div className="section-title">
          <h2 className="title">{data.title}</h2>
        </div>

        <div className="row">
          {data &&
            data.map((item) => (
              <div key={item?._id} className="col-lg-3 col-sm-6">
                <div className="single-feature">
                  <div className="thumb">
                    <Link to={`/properties/${item?._id}`}>
                      <span style={spanStyle}></span>
                    </Link>
                  </div>
                  <Link to={`/properties/${item?._id}`}>
                    <img
                      src={item?.photos[0]}
                      alt=""
                      style={{ height: "200px", width: "100%" }}
                    />
                  </Link>
                  <div className="details">
                    <h6 className="title readeal-top">
                      <Link to="">{item?.name}</Link>
                    </h6>
                    <p className="author">
                      <FontAwesomeIcon icon={faLocationDot} /> {item?.city}
                    </p>

                    <h6 className="price">₦{item?.cheapestPrice}</h6>

                    <ul className="info-list"></ul>
                    <ul className="contact-list">
                      <li></li>

                      <li className="readeal-top">
                        <Link
                          className="btn btn-yellow"
                          to={`/properties/${item?._id}`}
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Featureds;
