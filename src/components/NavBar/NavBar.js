import React, { useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Link } from "react-router-dom";
import "./NavBar.css";

gsap.registerPlugin(MotionPathPlugin);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    if (!isOpen) {
      openAnimation();
      setIsOpen(true);
    } else {
      closeAnimation();
      setIsOpen(false);
    }
  };

  const openAnimation = () => {
    gsap.to(".full-page-nav", {
      y: 0,
      duration: 0.5,
      ease: "linear",
    });
  };

  const closeAnimation = () => {
    gsap.to(".full-page-nav", {
      y: "100%",
      duration: 0.5,
      ease: "linear",
    });
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="full-width-logo-container">
          <Link to="/">
            <div className="nav-logo GroteskNeue">
              <p>SHOPRHW</p>
            </div>
          </Link>
        </div>
        <div className="mobile">
          <button className="menu-toggle nav" onClick={handleMenuToggle}>
            {isOpen ? "Menu" : "Menu"}
          </button>
          <div className={`full-page-nav ${isOpen ? "open" : ""}`}>
            <div className="nav-top">
              <button
                className="menu-toggle-nav-open"
                onClick={handleMenuToggle}
              >
                Menu
              </button>
              <button className="close-button" onClick={handleMenuToggle}>
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M.646 1.646a.5.5 0 0 1 .708 0L8 7.293 15.354.646a.5.5 0 0 1 .708.708L8.707 8l6.353 6.354a.5.5 0 0 1-.708.708L8 8.707l-6.354 6.353a.5.5 0 0 1-.708-.708L7.293 8 .646 1.646z" />
                </svg>
              </button>
            </div>
            <div className="nav-links space-mono-regular">
              <ul>
                <li>
                  <Link to="/" onClick={handleMenuToggle}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" onClick={handleMenuToggle}>
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleMenuToggle}>
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https:www.instagram.com/shop.rhw/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-bottom space-mono-regular">
              <div className="nav-text">
                <div className="pb-3">
                  Studio Toronto, ON <br />Ⓒ 2024
                </div>
                <div className="pb-3 w-75">
                  A Toronto-based studio specializing in custom woodwork &
                  functional objects built by Rundell Haynes-Wells. Driven by a
                  love for design, materials, and transforming spaces, we're
                  committed to sharing both our craft and process.
                </div>
              </div>
              <div className="nav-logo-menu GroteskNeue">SHOPRHW</div>
            </div>
          </div>
        </div>

        <div className="desktop">
          <ul>
            <Link to="/products">
              <li>Furniture</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <li>
              <a
                href="https:www.instagram.com/shop.rhw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
