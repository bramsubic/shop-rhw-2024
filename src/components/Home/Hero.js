import React, { useEffect } from "react";
import gsap from "gsap";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
      const pagePath = window.location.pathname;
      const navMenu = document.querySelector('.nav-logo p');
  
    gsap.set("nav", { y: -265 });
    gsap.set(".hero-text", { y: 100 });
    gsap.set(".nav-logo", { y: -265 });
    gsap.set(".menu-toggle", { y: -265 });
    gsap.set(".desktop", { y: -265 });
    gsap.set(".letter-wrapper", { y: 400 });
    gsap.set(".item-copy-wrapper p", { y: 50 });

    gsap.defaults({ duration: 0.5, ease: "power3.out" });
    const tl = gsap.timeline({ pause: true, delay: 0.5 });

    tl.to(".letter-wrapper", {
      y: 0,
      // stagger: 0.1,
    })
      .to(".header-item-1", {
        left: "12vw",
      })
      .to(
        ".header-item-2",
        {
          right: "8vw",
        },
        "<"
      )
      .to(
        ".item-main .item-img img",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
        "<"
      )
      .to(".header-item-1", {
        left: 0,
        scale: 1,
      })
      .to(
        ".header-item-2",
        {
          right: 0,
          scale: 1,
        },
        "<"
      )
      .to(
        ".item-main .item-img img",
        {
          scale: 1,
        },
        "<"
      )
      .to(
        ".item-side .item-img",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          stagger: 0.1,
        },
        "<"
      )
      .to(
        ".header",
        {
          top: "-20em",
        },
        "<"
      )
      .to(
        "nav",
        {
          y: 0,
        },
        "<"
      )
      .to(
        ".hero-text",
        {
          y: 0,
          delay: 0.5
        },
        "<"
      )
      .to(
        ".menu-toggle",
        {
          y: 0,
        },
        "<"
      )
      .to(
        ".desktop",
        {
          y: 0,
        },
        "<"
      )
      .to(
        ".nav-logo",
        {
          y: 0,
        }
      );

      if (pagePath === "/" && navMenu) {
        navMenu.classList.add('custom-white-text');
      } else {
        navMenu.classList.remove('custom-white-text');
      }
    
      return () => {
        if (navMenu) {
          navMenu.classList.remove('custom-white-text');
        }
      };
  }, []);

  return (
    <div className="hero-container">
      <nav>
      </nav>
        <div className="hero-text text-center text-uppercase">
          <p>Transforming spaces with expertly crafted 
            <br/>
            custom woodwork and functional designs.</p>
        </div>
      <div className="container-hero">
        <div className="items">
          <div className="items-col">
            <div className="item item-main">
              <div className="item-img">
                <img src="1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Link to="/">
      <div className="header">
        <div className="header-item header-item-1">
          <div className="letter">
            <div className="letter-wrapper">S</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">H</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">O</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">P</div>
          </div>
        </div>
        <div className="header-item header-item-2">
          <div className="letter">
            <div className="letter-wrapper">R</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">H</div>
          </div>
          <div className="letter">
            <div className="letter-wrapper">W</div>
          </div>
        </div>
       
      </div> </Link> */}
    </div>
  );
};

export default Hero;
