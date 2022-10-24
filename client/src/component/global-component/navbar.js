import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "logo";
  let anchor = "#";
  const { user, dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div>
      <div className="navbar-area">
        <nav
          className="navbar navbar-area navbar-expand-lg"
          style={{ backgroundColor: "#fff", padding: "30" }}
        >
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-toggle="collapse"
                data-target="#realdeal_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo readeal-top">
              <Link to="/">
                <img
                  src="../hy.png"
                  style={{ width: "130px", height: "60px" }}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile"></div>
            <div className="collapse navbar-collapse" id="realdeal_main_menu">
              <ul className="navbar-nav menu-open readeal-top">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/property">Property</Link>
                </li>
                <li>
                  <Link to="/info">Help Center</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>

                <li>
                  <Link>
                    {user ? (
                      <div>
                        {user.username}
                        <li style={{ color: "#008000" }} onClick={handleClick}>
                          log out
                        </li>
                      </div>
                    ) : (
                      <div className="navItems">
                        <li className="navButton">
                          <Link to="register" style={{ color: "#008000" }}>
                            Register
                          </Link>
                        </li>
                        <li className="navButton">
                          <Link to="login" style={{ color: "#008000" }}>
                            {" "}
                            Login
                          </Link>{" "}
                        </li>
                      </div>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
