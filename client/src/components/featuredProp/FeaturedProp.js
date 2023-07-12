import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import "./style.css";
import useFetch from "../../hooks/useFetch";
const FeaturedProp = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  let { data, loading, error } = useFetch("/properties?featured=true");
  return (
    <div className="featured-area">
      <div className="container">
        <div className="row justify-content-center">
          {data &&
            data.map((item) => (
              <div
                key={item?._id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div className="single-feature">
                  <div className="thumb">
                    <img src={item?.photos[0]} alt={item?.photos[0]} />
                  </div>
                  <div className="details">
                    <a href="#" className="feature-logo">
                      <img src={item?.photos[0]} alt={item?.photos[0]} />
                    </a>
                    <p className="author">
                      <i className="fa fa-user" /> {item.authorname}
                    </p>
                    <h6 className="title readeal-top">
                      <Link to={item.url}>{item.name}</Link>
                    </h6>
                    <h6 className="price">{item.cheapestPrice}</h6>
                    <del>{item.cheapestPrice}</del>
                    <ul className="info-list">
                      <li>
                        <img src={item?.photos[0]} alt="img" /> {item.city}
                      </li>
                    </ul>
                    <ul className="contact-list">
                      <li>
                        <a className="phone" href="#">
                          <i className="fa fa-phone" />
                        </a>
                      </li>
                      <li>
                        <a className="message" href="#">
                          <img src={item?.photos[0]} alt="img" />
                        </a>
                      </li>
                      <li className="readeal-top">
                        <Link className="btn btn-yellow" to="">
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

export default FeaturedProp;
