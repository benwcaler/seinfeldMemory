import React from "react";
// import images from "./images.json"

export const Image = props => (
  <div 
    
    className="imgClick"
    style={{
      height: "200px"
    }}
    alt=""
    {...props}
  />
);

export default Image;