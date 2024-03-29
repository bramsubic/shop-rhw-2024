import React from "react";
 
const Image = ({ item }) => {            
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 my-2"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.src} alt={Val.alt} className="photo" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default Image;