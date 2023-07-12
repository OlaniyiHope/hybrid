import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

const Featured = () => {
  return (
    <>
      <div className="properties-area pd-top-92">
        <div className="container">
          <div className="section-title">
            <h2 className="title" style={{ textAlign: "center" }}>
              Beautiful places to stay
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-leading-feature">
                <div
                  className="hii"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="details">
                  <p
                    className="author"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Lagos
                  </p>
                  <h6 className="title readeal-top">
                    <Link to="">Banana Island</Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-leading-feature">
                <img
                  className="hii2"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="details">
                  <p
                    className="author"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Lagos
                  </p>
                  <h6 className="title readeal-top">
                    <Link to="">Banas Island</Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-leading-feature">
                <img
                  className="featuredImg3"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="details">
                  <p
                    className="author"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Lagos
                  </p>
                  <h6 className="title readeal-top">
                    <Link to="">Bana Island</Link>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-leading-feature">
                <img
                  className="featuredImg4"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="details">
                  <p
                    className="author"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Lagos
                  </p>
                  <h6 className="title readeal-top">
                    <Link to="">Bana Island</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
