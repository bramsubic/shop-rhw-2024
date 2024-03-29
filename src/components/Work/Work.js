import React, { useState, useEffect } from "react";
import Data from "./Data";
import Image from "./Image";
import Button from "./Button";
import "./Work.css";
import { gsap } from "gsap"; // Import GSAP

const Work = () => {
  const [item, setItem] = useState(Data);
  const [currentCategory, setCurrentCategory] = useState("All");

  const menuItems = ["All", ...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    let filteredData;
    if (curcat === "All") {
      filteredData = Data;
    } else {
      filteredData = Data.filter((newVal) => {
        return newVal.category === curcat;
      });
    }
    setItem(filteredData);
    setCurrentCategory(curcat);
  };

  // Use GSAP to animate images when the component mounts and when `item` or `currentCategory` state changes
  useEffect(() => {
    gsap.from(".photo", {
      opacity: 0,
      y: 100, // Start position from the bottom
      duration: 1,
      ease: "power3.out", // Easing function
      stagger: 0.2, // Stagger animation for each image
    });
  }, [item, currentCategory]); // Trigger animation when `item` or `currentCategory` changes

  return (
    <div className="container-fluid">
      <div className="row work-header">
        <div className="col-4">
          <p> {item.length} </p>
        </div>
        <div className="col-8">
          <p>{currentCategory}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <Button
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
            currentCategory={currentCategory}
          />
        </div>
        <Image item={item} />
      </div>
    </div>
  );
};

export default Work;
