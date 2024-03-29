import React from "react";
import Data from "./Data";
import "./Work.css";

const Buttons = ({ filterItem, setItem, menuItems, currentCategory }) => {
  return (
    <>
      <div className="button-container d-flex">
        {menuItems.map((Val, id) => {
          const isActive = Val === currentCategory;
          return (
            <button
              className={`btn ${isActive ? 'active' : ''}`}
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val},
            </button>
          );
        })}
        {/* <button
          className={`btn p-0 m-0 ${currentCategory === 'All' ? 'active' : ''}`}
          onClick={() => setItem(Data)}
        >
          All
        </button>  */}
       </div>
    </>
  );
};
 
export default Buttons;
