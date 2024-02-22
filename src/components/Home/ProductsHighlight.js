import React from "react";
import './Products.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductsHighlight() {
  const images = [
    "organic.jpg",
    "organic.jpg",
    "organic.jpg",
    "organic.jpg",
    "organic.jpg",
  ];

  const arrowContainerStyle = {
    display: "inline-block",
    border: "1px solid #232326",
    borderRadius: "20%",
    padding: "5px 7px 5px 7px",
    cursor: "pointer",
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ ...arrowContainerStyle, position: "absolute", top: "-20%", right: "6%", transform: "translateY(-50%)" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{ fill: "#232326", width: "24px", height: "24px" }}>
          <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/>
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ ...arrowContainerStyle, position: "absolute", top: "-20%", right: "1.5%", transform: "translateY(-50%)" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{ fill: "#232326", width: "24px", height: "24px" }}>
          <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
      </div>
    );
  };

  const CustomPrevArrowMobile = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ ...arrowContainerStyle, position: "absolute", top: "-30%", right: "10%", transform: "translateX(-50%)" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{ fill: "#232326", width: "24px", height: "24px" }}>
          <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left"/>
        </svg>
      </div>
    );
  };

  const CustomNextArrowMobile = (props) => {
    const { onClick } = props;
    return (
      <div
        style={{ ...arrowContainerStyle, position: "absolute", top: "-30%", right: "8%", transform: "translateX(50%)" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{ fill: "#232326", width: "24px", height: "24px" }}>
          <path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
        </svg>
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            prevArrow: <CustomPrevArrowMobile />,
            nextArrow: <CustomNextArrowMobile />,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return(
    <div className="container">
      <div className="productsContainer" style={{ position: "relative" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="headerContainer">
            <h1 className="sectionHeader">PRODUCT SPOTLIGHT</h1>
          </div>
        </div>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="imgContainer">
              <img className="rounded fluid w-100 h-100" src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductsHighlight;
