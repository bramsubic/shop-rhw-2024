import React from "react";
import './Products.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductsHighlight() {
  // Assuming you have an array of image URLs
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
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
        style={{ ...arrowContainerStyle, position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)" }}
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
        style={{ ...arrowContainerStyle, position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)" }}
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
        style={{ ...arrowContainerStyle, position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)" }}
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
        style={{ ...arrowContainerStyle, position: "absolute", top: "0", right: "50%", transform: "translateX(50%)" }}
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
        breakpoint: 750,
        settings: {
          prevArrow: <CustomPrevArrowMobile />,
          nextArrow: <CustomNextArrowMobile />,
        },
      },
    ],
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
            <div key={index}>
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductsHighlight;